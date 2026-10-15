// Import React's useState hook
import { useState } from 'react'

// Import the hero photo helper
import heroPhoto from './hero-photo.js'

// Import the hero styles
import './hero.css'

function Hero() {
  // Store the three Unsplash image IDs
  const photos = [
    "photo-1786226462494-7ed4a4b8fd54",
    "photo-1669023414166-a4cc7c0fe1f5",
    "vector-1776173941949-9c53d6fc1598",
  ]

  // Store a description for each image in the same order
  const descriptions = [
    "Moment in Focus",
    "A computer screen with a keyboard and coding setup",
    "Hands balancing a house and coins on a scale",
  ]
  // Remember which hero photo is currently showing
  const [index, setIndex] = useState(0)

  // Remember the hero image's saturation setting
  const [sat, setSat] = useState(0)

  // Remember the hero image's sepia setting
  const [sepia, setSepia] = useState(0)

   // Move to the next photo
  const nextPhoto = () => {
    // If we are on the last photo, go back to the first
    if (index === photos.length - 1) {
      setIndex(0)
    } else {
      // Otherwise move forward by one
      setIndex(index + 1)
    }
  }

  // Move to the previous photo
  const previousPhoto = () => {
    // If we are on the first photo, go to the last
    if (index === 0) {
      setIndex(photos.length - 1)
    } else {
      // Otherwise move backward by one
      setIndex(index - 1)
    }
  }

  // Show the image in normal color
  const showColor = () => {
    setSat(0)
    setSepia(0)
  }

  // Show the image in black and white
  const showBlackAndWhite = () => {
    setSat(-100)
    setSepia(0)
  }

  // Show the image with a sepia tint
  const showSepia = () => {
    setSat(0)
    setSepia(100)
  }

  // For now, use position 0 from both arrays
  const [src, alt] = heroPhoto(
    photos[index],
    1200,
    500,
    sat,
    descriptions[index],
    sepia
  )

  // Return the hero and its color controls
  return (
    <div>
      {/* Keep the hero image and text together */}
      <div className="hero">
        {/* Show the selected hero image */}
        <img src={src} alt={alt} />

        {/* Show the hero message */}
        <h2 className="hero-text">
          Creating with art, design, and code.
        </h2>
      </div>

      {/* Buttons that change the image appearance */}
      <p>
        {/* Move backward through the photos */}
       <button onClick={previousPhoto}>Previous</button>

       &nbsp;

        {/* Move forward through the photos */}
       <button onClick={nextPhoto}>Next</button>

       &nbsp;
        {/* Return the image to normal color */}
        <button onClick={showColor}>Color</button>

        {/* Add a space between buttons */}
        &nbsp;

        {/* Turn the image black and white */}
        <button onClick={showBlackAndWhite}>Black and White</button>

        {/* Add a space between buttons */}
        &nbsp;

        {/* Add a sepia tint */}
        <button onClick={showSepia}>Sepia</button>
      </p>
    </div>
  )
}

// Make Hero available to App.jsx
export default Hero