function ColorMixingQuizPortfolioCard() {
  let name = "Color Mixing Quiz"
  let description = "An interactive project that lets users mix colors and see the result."
  let liveUrl = "kevinikal.github.io/click-lab/"
  let repoUrl = "https://github.com/KevinikaL/click-lab.git"

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

export default ColorMixingQuizPortfolioCard