// Build an Unsplash image URL using an image ID and image settings
const imageUrl = ({photo, width, height, sat, sepia}) =>
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