// Build an Unsplash image URL using an image ID and image settings
// If sat is not provided, use 0 by default
const imageUrl = ({photo, width, height, sat = 0, sepia}) =>
  "https://images.unsplash.com/" +
  photo +
  "?w=" +
  width +
  "&h=" +
  height +
  "&fit=crop&auto=format" +
  "&sat=" +
  sat +
  "&sepia=" +
  sepia

// Make imageUrl available to other files
export default imageUrl