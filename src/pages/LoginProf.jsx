import './Login.css'
import { useState } from 'react'
import Verifyprof from '../functions/Verifyprof.jsx'

const LoginProf = () => {
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    const [matricula,setMatri] = useState("")

  return (
    <main className='forms'>
        <div className='div'>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="nome" id='nome' />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='email' placeholder="xxxxxxx@gmail.com" />
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} id='senha' placeholder="......" />
            <input type="number" value={matricula} onChange={(e) => setMatri(e.target.value)}id='matri' placeholder='matricula' />
            <Verifyprof nome={nome} email={email} senha={senha} matricula={matricula} />
        </div>
    </main>
  )
}

export default LoginProf