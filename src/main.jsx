import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MantineProvider } from "@mantine/core" 
import Conta from './pages/Conta.jsx'
import Login from './pages/Login.jsx'
import Aluno from './pages/Aluno.jsx'
import CriarLogin from './pages/CriarLogin.jsx'
import LoginProf from './pages/LoginProf.jsx'
import LoginCord from './pages/LoginCord.jsx'
import LoginAluno from './pages/LoginAluno.jsx'
import Coodenador from './pages/Coodenador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route basename='/sistema-escolar-react' element={<App/>}/>
          <Route path='/Conta' element={<Conta/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/aluno' element={<Aluno/>}/>
          <Route path='/login2' element={<CriarLogin/>}/>
          <Route path='/loginprof' element={<LoginProf/>} />
          <Route path='/logincord' element={<LoginCord/>} />
          <Route path='/loginaluno' element={<LoginAluno/>} />
          <Route path='/coordenador' element={<Coodenador/>} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
