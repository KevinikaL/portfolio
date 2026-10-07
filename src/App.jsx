import Header from './Header.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Footer from './Footer.jsx'
import Fortune from './Fortune.jsx'
import FeatherFinderPortfolioCard from './FeatherFinderPortfolioCard.jsx'
import ColorMixingQuizPortfolioCard from './ColorMixingQuizPortfolioCard.jsx'
import DataPlaylistPortfolioCard from './DataPlaylistPortfolioCard.jsx'
import Links from './Links.jsx'
import NavBar from './NavBar.jsx'
import Hero from './Hero.jsx'

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Skills />
       <Fortune />
       <FeatherFinderPortfolioCard />
       <ColorMixingQuizPortfolioCard />
       <DataPlaylistPortfolioCard />
       <Links />
       <NavBar />
      <Footer />
    </div>
  )
}

export default App