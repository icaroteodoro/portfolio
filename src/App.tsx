import './App.css'
import Header from './components/Header'
import Summary from './sections/Summary'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { Toaster } from 'sonner'
import {  } from 'lucide-react'

function App() {
  return (
    <div className='bg-stone-900 flex flex-col items-center'>
      <Header/>
      <Summary/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Toaster />
    </div>
  )
}

export default App
