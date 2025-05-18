import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import { About } from './components/About'
import { Tech } from './components/Tech'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import Footer from './components/footer'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Tech />
      <Contact />
      <Footer />
    </>
  )
}
export default App