import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import MyWork from './components/mywork/MyWork'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <MyWork/>
    <Contact/>
    </div>
  )
}

export default App