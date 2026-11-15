import Layout from "./components/layout/Layout"
import About from "./components/sections/About"
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
      </Layout>
    </>
  )
}

export default App
