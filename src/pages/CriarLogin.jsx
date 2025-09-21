import './CriarLogin.css'
import { useState } from 'react'
import AddCont from '../functions/AddCont'

const CriarLogin = () => {

  const [nome,setNome] = useState("")
  const [senha,setSenha] = useState("")
  const [email,setEmail] = useState("")


  return (
    <main className='log'>
        <div className='pp'>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value) } placeholder="nome" className='nome' />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value) } className='email' placeholder="xxxxxxx@gmail.com" />
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value) } className='senha' placeholder="......" />
            <AddCont nome={nome} senha={senha} email={email} />
        </div>
    </main>
  )
}

export default CriarLogin