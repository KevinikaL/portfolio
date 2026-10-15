// Import React's useState hook so this card can remember its like count
import { useState } from 'react'

// Create the Data Playlist portfolio card component
function DataPlaylistPortfolioCard() {
  // Store the project name
  let name = "My Playlist"

  // Store the project description
  let description = "A JavaScript playlist app that displays songs from data and lets users browse the collection."

  // Store the link to the live project
  let liveUrl = "https://kevinikal.github.io/data-playlist/"

  // Store the link to the GitHub repository
  let repoUrl = "https://github.com/KevinikaL/data-playlist.git"

  // Remember how many likes this card has
  const [likes, setLikes] = useState(0)

  // Add one like each time the button is clicked
  const addLike = () => {
    setLikes(likes + 1)
  }

  // Return the project card
  return (
    <article>
      {/* Show the project name */}
      <h2>{name}</h2>

      {/* Show the project description */}
      <p>{description}</p>

      {/* Show links to the live project and the code */}
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>

      {/* Show the like count and increase it when clicked */}
      <button onClick={addLike}>Like {likes}</button>
    </article>
  )
}

// Make this component available to App.jsx
export default DataPlaylistPortfolioCard