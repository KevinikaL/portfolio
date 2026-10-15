import { useState } from 'react'

// Import the heroPhoto helper
import heroPhoto from './hero-photo.js'
// Import hero styles
import './hero.css'

function Hero() {
  // State that remembers the hero image saturation
  const [sat, setSat] = useState(0)
  // Show the hero image in color
  const showColor = () => {
  setSat(0)
}

  // Show the hero image in black and white
  const showBlackAndWhite = () => {
  setSat(-100)
  setSepia(0)
}
  // Show the image with a sepia tint
  const showSepia = () => {
  setSat(0)
  setSepia(100)
  }
  // Get the image source and alt text from heroPhoto
  const [src, alt] = heroPhoto(1200, 500, "Moment in Focus", sat)

  return (
  // One outer element wraps the hero and the buttons
  <div>
    {/* Keep the hero image and words together */}
    <div className="hero">
      {/* Display the hero image */}
      <img src={src} alt={alt} />

      {/* Keep your existing hero text */}
      <h2 className="hero-text">
        Creating with art, design, and code.
      </h2>
    </div>

    {/* Buttons that change the saturation state */}
    <p>
      {/* Change the hero back to color */}
      <button onClick={showColor}>Color</button>

      {/* Add a space between the buttons */}
      &nbsp;


      {/* Change the hero to black and white */}
      <button onClick={showBlackAndWhite}>Black and White</button>
    </p>
  </div>
)
}
export default Hero