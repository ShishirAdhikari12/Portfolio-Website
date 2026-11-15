import Layout from "./components/layout/Layout"
import About from "./components/sections/About"
import DeveloperSnapshot from "./components/sections/DeveloperSnapshot"
import Hero from "./components/sections/Hero"
import Project from "./components/sections/Project"
import Skills from "./components/sections/Skills"

function App() {

  return (
    <>
      <Layout >
        <Hero />
        <About />
        <Skills />
        <Project />
        <DeveloperSnapshot />
      </Layout>
    </>
  )
}

export default App
