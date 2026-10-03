import Header from './Header.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Footer from './Footer.jsx'
import Fortune from './Fortune.jsx'
import FeatherFinderPortfolioCard from './FeatherFinderPortfolioCard.jsx'
import ColorMixingQuizPortfolioCard from './ColorMixingQuizPortfolioCard.jsx'
import DataPlaylistPortfolioCard from './DataPlaylistPortfolioCard.jsx'

function App() {
  return (
    <div className="container">
      <Header />
      <p>I’m learning web development and building projects with React; all while running my art buisness.</p>
      <p>I hope to combine my creative skills with the new technical skills I’m learning to build engaging projects that connect with people and keep them coming back.</p>
      <About />
      <Skills />
       <Fortune />
       <FeatherFinderPortfolioCard />
       <ColorMixingQuizPortfolioCard />
       <DataPlaylistPortfolioCard />
      <Footer />
    </div>
  )
}

export default App