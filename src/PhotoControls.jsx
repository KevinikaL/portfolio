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
        <button onClick={onPrevious}>Rewind</button>

        &nbsp;

        {/* Move forward through the photos */}
        <button onClick={onNext}>Next View</button>

        &nbsp;

        {/* Return the image to normal color */}
        <button onClick={onColor}>Colorful</button>

        &nbsp;

        {/* Turn the image black and white */}
        <button onClick={onBlackAndWhite}>
          Classic Mode
        </button>

        &nbsp;

        {/* Give the image a sepia tint */}
        <button onClick={onSepia}>Vintage Vibes</button>
        </p>
  )
}

export default PhotoControls