// Import the imageUrl helper function
import imageUrl from './image-url.js'

// Create a function that builds the hero image information
const heroPhoto = (width, height, description, sat, sepia) => {
  // Create the image URL using the width and height and saturation
  const src = imageUrl(width, height, sat)

  // Store the image description for the alt text
  const alt = description

  // Return both values together in an array
  return [src, alt]
}

// Make heroPhoto available to other files
export default heroPhoto