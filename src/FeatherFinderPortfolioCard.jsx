// Import React's useState hook
import { useState } from 'react'

// Create the Feather Finder portfolio card component
function FeatherFinderPortfolioCard() {
  // Store all Feather Finder project information in one object
  const project = {
    name: "Feather Finder",
    description: "A bird identification project that helps identify birds from an uploaded image.",
    liveUrl: "https://kevinikal.github.io/feather-finder/",
    repoUrl: "https://github.com/KevinikaL/feather-finder.git",
  }

  // Remember how many likes this card has
  const [likes, setLikes] = useState(0)

  // Add one like when the button is clicked
  const addLike = () => {
    setLikes(likes + 1)
  }

  // Return the project card
  return (
    <article>
      {/* Read the project name from the object */}
      <h2>{project.name}</h2>

      {/* Read the project description from the object */}
      <p>{project.description}</p>

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
export default FeatherFinderPortfolioCard