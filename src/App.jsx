import Header from './Header.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'

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

function Footer() {
  let year = new Date().getFullYear()
  return <p>&copy; {year} Kevinika Legier</p>
}

function App() {
  return (
    <div>
      <Header />
      <p>Learning React one component at a time.</p>
      <About />
      <Skills />
       <Fortune />
      <Footer />
    </div>
  )
}

export default App