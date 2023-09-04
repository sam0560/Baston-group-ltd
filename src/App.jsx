import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import ProjectPortfolio from './components/ProjectPortfolio'
import Review from './components/Review'
import Team from './components/Team'
import Services from './components/Services'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <ProjectPortfolio />
        <Review />
        <Team />
        <Services />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}

export default App
