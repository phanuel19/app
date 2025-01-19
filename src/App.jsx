import './App.css'
import About from './components/About/About'
// import Advices from './components/Advices/Advices'
// import ControlButtons from './components/ControlButtons/ControlButtons'
// import Datacharts from './components/DataCharts/Datacharts'
// import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar/Navbar'

let logged = false
function loginForm() {
  return <p> Login </p>
}
function App() {

  return (

    logged ? loginForm() : <About />


  )
}

export default App
