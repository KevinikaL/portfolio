import Header from './Header.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Footer from './Footer.jsx'
import Fortune from './Fortune.jsx'
import Links from './Links.jsx'
import NavBar from './NavBar.jsx'
import Hero from './Hero.jsx'
import ProjectCard from './ProjectCard.jsx'
import projects from './projects.js'
import PhotoControls from './PhotoControls.jsx'

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Skills />
       <Fortune />
       {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
       <Links />
       <NavBar />
      <Footer />
    </div>
  )
}

export default App