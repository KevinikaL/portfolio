function DataPlaylistPortfolioCard() {
  let name = "My Playlist"
  let description = "A JavaScript playlist app that displays songs from data and lets users browse the collection."
  let liveUrl = "https://kevinikal.github.io/data-playlist/"
  let repoUrl = "https://github.com/KevinikaL/data-playlist.git"

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

export default DataPlaylistPortfolioCard