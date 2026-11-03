function PhotoControls({
  onNext,
  onPrevious,
  onColor,
  onBlackAndWhite,
  onSepia,
}) {
  return (
    <p>
      {/* Move backward through the photos */}
        <button onClick={onPrevious}>Previous Photo</button>

        &nbsp;

        {/* Move forward through the photos */}
        <button onClick={onNext}>Next Photo</button>

        &nbsp;

        {/* Return the image to normal color */}
        <button onClick={onColor}>Color</button>

        &nbsp;

        {/* Turn the image black and white */}
        <button onClick={onBlackAndWhite}>
          Black and White
        </button>

        &nbsp;

        {/* Give the image a sepia tint */}
        <button onClick={onSepia}>Sepia</button>
        </p>
  )
}

export default PhotoControls