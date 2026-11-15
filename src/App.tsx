import Layout from "./components/layout/Layout"
import About from "./components/sections/About"
import Hero from "./components/sections/Hero"
import Skills from "./components/sections/Skills"

function App() {

  return (
    <>
      <Layout >
        <Hero />
        <About />
        <Skills />
      </Layout>
    </>
  )
}

export default App
