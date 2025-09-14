import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reclame from './pages/Reclame.jsx'
import Conta from './pages/Conta.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/Reclame' element={<Reclame/>} />
          <Route path='/Conta' element={<Conta/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
