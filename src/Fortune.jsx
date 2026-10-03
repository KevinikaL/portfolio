function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Fortune() {
  const fortunes = [
    "Keep going, even when it feels slow.",
    "Small progress still counts.",
    "You are building something one step at a time."
  ]

  const index = randomNumber(0, fortunes.length - 1)

  return <p>{fortunes[index]}</p>
}

export default Fortune