import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Conta from './pages/Conta.jsx'
import Login from './pages/Login.jsx'
import Aluno from './pages/Aluno.jsx'
import CriarLogin from './pages/CriarLogin.jsx'
import LoginProf from './pages/LoginProf.jsx'
import LoginCord from './pages/LoginCord.jsx'
import LoginAluno from './pages/LoginAluno.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Conta' element={<Conta/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/aluno' element={<Aluno/>}/>
        <Route path='/login2' element={<CriarLogin/>}/>
        <Route path='/loginprof' element={<LoginProf/>} />
        <Route path='/logincord' element={<LoginCord/>} />
        <Route path='/loginaluno' element={<LoginAluno/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
