import './App.css'
import About from './components/About/About'
import Advices from './components/Advices/Advices'
import ControlButtons from './components/ControlButtons/ControlButtons'
import Datacharts from './components/DataCharts/Datacharts'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
 
  return (
    <>
    <Navbar/>
    <About/>
    <Datacharts/>
    <Advices/>
    <ControlButtons/>
    <Footer/>
    </>
  )
}

export default App
