import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Advices from './components/Advices/Advices'
import ControlButtons from './components/ControlButtons/ControlButtons'
import Datacharts from './components/DataCharts/Datacharts'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
  <Route path="/" element={<App />}/>
  <Route path="advices" element={<Advices />} />
    <Route path="controlButtons" element={<ControlButtons />} />
    <Route path="datacharts" element={<Datacharts />} />
</Routes>
</BrowserRouter>
 ,
)