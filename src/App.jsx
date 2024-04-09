
import { useEffect } from 'react'
import './App.css'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Aos from 'aos'
import"aos/dist/aos.css"
import Education from './components/Education'
function App() {

useEffect(() => {
  Aos.init();

}, [])


  return (
    <>
<Navbar/>
<div className="container">
   <Home/>
  <Skills/> 
 <Projects/>
 <Education/>
 {/* <Experience/>  */}
<Contact/>
</div>
    </>
  )
}

export default App
