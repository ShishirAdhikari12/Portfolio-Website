import Layout from "./components/layout/Layout"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import DeveloperSnapshot from "./components/sections/DeveloperSnapshot"
import Education from "./components/sections/Education"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"

function App() {

  return (
    <>
      <Layout >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DeveloperSnapshot />
        <Education />
        <Contact />
      </Layout>
    </>
  )
}

export default App
