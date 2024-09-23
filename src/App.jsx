import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
      <main className="bg-background">
          <Router>
              <Navbar />
              <Routes>
                  <Route
                      path="/"
                      element={
                          <>
                              <Hero />
                              <AboutMe />
                              <Projects />
                              <Footer />
                          </>
                      }
                  />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          </Router>

      </main>
  )
}

export default App
