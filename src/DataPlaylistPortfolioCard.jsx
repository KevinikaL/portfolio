// Import React's useState hook so this card can remember its like count
import { useState } from 'react'

// Create the Data Playlist portfolio card component
function DataPlaylistPortfolioCard() {
  // Store the project name
  let name = "My Playlist"

  // Store the project description
  let description = "A JavaScript playlist app that displays songs from data and lets users browse the collection."

  // store extra details that appear when Show More is open
  let details = "I built it to practice working with data, changing what appears on the page, and moving through a collection of songs."


  // Store the link to the live project
  let liveUrl = "https://kevinikal.github.io/data-playlist/"

  // Store the link to the GitHub repository
  let repoUrl = "https://github.com/KevinikaL/data-playlist.git"

  // Remember how many likes this card has
  const [likes, setLikes] = useState(0)

  // Remember whether the extra details are open or closed
  const [open, setOpen] = useState(false)

  // Add one like each time the button is clicked
  const addLike = () => {
    setLikes(likes + 1)
  }
  // Switch open from false to true, or true to false
  const toggleOpen = () => {
    setOpen(!open)
  }

  // Start with the short description
  let text = description

  // If the card is open, add the extra details
  if (open) {
    text = description + " " + details
  }

  // Start with the Show More label
  let label = "Show More"

  // If the card is open, change the button label
  if (open) {
    label = "Show Less"
  }


  // Return the project card
  return (
    <article>
      {/* project name */}
      <h2>{name}</h2>

      {/* Show either the short or expanded description */}
      <p>{text}</p>


      {/* Open or close the extra project details */}
      <button onClick={toggleOpen}>{label}</button>
      {open ? "Show less" : "Tell me more"}


      {/* links to the live project and the code */}
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>

      {/* the like count and increase it when clicked */}
      <button onClick={addLike}>Like {likes}</button>
    </article>
  )
}

// Make this component available to App.jsx
export default DataPlaylistPortfolioCard