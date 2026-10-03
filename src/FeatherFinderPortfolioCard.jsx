function FeatherFinderPortfolioCard() {
  let name = "Feather Finder"
  let description = "A bird identification project that helps identify birds from an uploaded image."
  let liveUrl = "https://kevinikal.github.io/feather-finder/"
  let repoUrl = "https://github.com/KevinikaL/feather-finder.git"

  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  )
}

export default FeatherFinderPortfolioCard