// Import React's useState hook
import { useState } from 'react'

// helper function 
function randomNumber(min, max) {
  // Return a random whole number between min and max
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Fortune() {
  // These fortunes do not change, so use const
  const fortunes = [
    // fortune messages
    "Keep going, even when it feels slow.",
    "Small progress still counts.",
    "You are building something one step at a time."
    
  ]

  // Remember which fortune is currently showing
  const [index, setIndex] = useState(0)

  // Pick a new random fortune when the button is clicked
  const newFortune = () => {
    setIndex(randomNumber(0, fortunes.length - 1))
  }

  return (
    // One outer div wraps the fortune and button
    <div>
      {/* Show the fortune at the current index */}
      <p>{fortunes[index]}</p>

      {/* Run newFortune when the visitor clicks */}
      <button onClick={newFortune}>New Fortune</button>
    </div>
  )
}

// Make Fortune available to App.jsx
export default Fortune


