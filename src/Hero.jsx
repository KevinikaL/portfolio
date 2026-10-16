// Import React's useState hook
import { useState } from 'react'

// Import the hero photo helper
import heroPhoto from './hero-photo.js'

// Import the hero styles
import './hero.css'

function Hero() {
  // Store each photo together with its matching description
  const photos = [
    {
      id: "photo-1786226462494-7ed4a4b8fd54",
      description: "Moment in Focus",
    },
    {
      id: "photo-1669023414166-a4cc7c0fe1f5",
      description: "A computer screen with a keyboard and coding setup",
    },
    {
      id: "vector-1776173941949-9c53d6fc1598",
      description: "Hands balancing a house and coins on a scale",
    },
  ]

  // Remember all hero settings in one state object
  const [settings, setSettings] = useState({
    index: 0,
    sat: 0,
    sepia: 0,
  })

  // Move to the next photo
  const nextPhoto = () => {
    // If we are on the last photo, go back to the first
    if (settings.index === photos.length - 1) {
      setSettings({
        // Keep the other settings the same
        ...settings,

        // Change only the photo index
        index: 0,
      })
    } else {
      setSettings({
        // Keep the other settings the same
        ...settings,

        // Move forward by one photo
        index: settings.index + 1,
      })
    }
  }

  // Move to the previous photo
  const previousPhoto = () => {
    // If we are on the first photo, go to the last
    if (settings.index === 0) {
      setSettings({
        // Keep the other settings the same
        ...settings,

        // Move to the last photo
        index: photos.length - 1,
      })
    } else {
      setSettings({
        // Keep the other settings the same
        ...settings,

        // Move backward by one photo
        index: settings.index - 1,
      })
    }
  }

  // Show the image in normal color
  const showColor = () => {
    setSettings({
      // Keep the current photo
      ...settings,

      // Reset the color settings
      sat: 0,
      sepia: 0,
    })
  }

  // Show the image in black and white
  const showBlackAndWhite = () => {
    setSettings({
      // Keep the current photo
      ...settings,

      // Remove the color
      sat: -100,

      // Turn sepia off
      sepia: 0,
    })
  }

  // Show the image with a sepia tint
  const showSepia = () => {
    setSettings({
      // Keep the current photo
      ...settings,

      // Keep normal saturation
      sat: 0,

      // Turn sepia all the way up
      sepia: 100,
    })
  }

  // Get the current photo object and unpack its properties
  const { id, description } = photos[settings.index]

  // Build the currently selected hero image
  const [src, alt] = heroPhoto({
    // Use the current photo's id
    photo: id,

    // Set the hero image size
    width: 1200,
    height: 500,

    // Use the color settings from state
    sat: settings.sat,
    sepia: settings.sepia,

    // Use the current photo's matching description
    description,
  })

  // Return the hero and its controls
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

      {/* Show which photo is currently selected */}
      <p>
        Photo {settings.index + 1} of {photos.length}
      </p>

      {/* Buttons that change the photo and appearance */}
      <p>
        {/* Move backward through the photos */}
        <button onClick={previousPhoto}>Previous Photo</button>

        &nbsp;

        {/* Move forward through the photos */}
        <button onClick={nextPhoto}>Next Photo</button>

        &nbsp;

        {/* Return the image to normal color */}
        <button onClick={showColor}>Color</button>

        &nbsp;

        {/* Turn the image black and white */}
        <button onClick={showBlackAndWhite}>
          Black and White
        </button>

        &nbsp;

        {/* Give the image a sepia tint */}
        <button onClick={showSepia}>Sepia</button>
      </p>

      {/* Let the visitor control the sepia amount */}
      <label>
        Sepia: {settings.sepia}

        {/* Update only the sepia setting when the slider moves */}
        <input
          type="range"
          min="0"
          max="100"
          value={settings.sepia}
          onChange={(event) =>
            setSettings({
              // Keep the current photo and saturation
              ...settings,

              // Change only sepia
              sepia: Number(event.target.value),
            })
          }
        />
      </label>
    </div>
  )
}

// Make Hero available to App.jsx
export default Hero