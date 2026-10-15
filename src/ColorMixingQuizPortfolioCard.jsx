// Import React's useState hook so this card can remember its like count
import { useState } from 'react'

// Create the Color Mixing Quiz portfolio card component
function ColorMixingQuizPortfolioCard() {
  // Store the project name
  let name = "Color Mixing Quiz"

  // Store the project description
  let description = "An interactive project that lets users mix colors and see the result."

  // Store the link to the live project
  let liveUrl = "https://kevinikal.github.io/click-lab/"

  // Store the link to the GitHub repository
  let repoUrl = "https://github.com/KevinikaL/click-lab.git"

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
export default ColorMixingQuizPortfolioCard