import './App.css'
import Events from './components/Events'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Events></Events>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
