import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Competitions from './components/Competitions'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AboutMe />
        <Experience />
        <Projects />
        {/* <Competitions /> */}
      </main>
      <Footer />
    </div>
  )
}

