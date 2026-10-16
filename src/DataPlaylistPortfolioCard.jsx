// Import React's useState hook
import { useState } from 'react'

// Create the Data Playlist portfolio card component
function DataPlaylistPortfolioCard() {
  // Store all Data Playlist project information in one object
  const project = {
    name: "My Playlist",
    description: "A JavaScript playlist app that displays songs from data and lets users browse the collection.",
    details: "I built it to practice working with data, changing what appears on the page, and moving through a collection of songs.",
    liveUrl: "https://kevinikal.github.io/data-playlist/",
    repoUrl: "https://github.com/KevinikaL/data-playlist.git",
  }

  // Remember how many likes this card has
  const [likes, setLikes] = useState(0)

  // Remember whether the extra details are showing
  const [open, setOpen] = useState(false)

  // Add one like when the button is clicked
  const addLike = () => {
    setLikes(likes + 1)
  }

  // Switch Show More on or off
  const toggleOpen = () => {
    setOpen(!open)
  }

  // Start with the short description
  let text = project.description

  // Add the extra details when the card is open
  if (open) {
    text = project.description + " " + project.details
  }

  // Start with the Show More label
  let label = "Show More"

  // Change the label when the card is open
  if (open) {
    label = "Show Less"
  }

  // Return the project card
  return (
    <article>
      {/* Read the project name from the object */}
      <h2>{project.name}</h2>

      {/* Show either the short or expanded description */}
      <p>{text}</p>

      {/* Open or close the extra details */}
      <button onClick={toggleOpen}>{label}</button>

      {/* Read the project links from the object */}
      <p>
        <a href={project.liveUrl}>See it live</a> ·{" "}
        <a href={project.repoUrl}>Read the code</a>
      </p>

      {/* Show and update the like count */}
      <button onClick={addLike}>Like {likes}</button>
    </article>
  )
}

// Make the component available to App.jsx
export default DataPlaylistPortfolioCard