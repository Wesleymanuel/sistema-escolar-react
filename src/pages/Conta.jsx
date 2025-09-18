import './Conta.css'
import { RiAccountBoxFill } from 'react-icons/ri'
import { RiAccountBox2Line } from "react-icons/ri"
import { RiAccountPinBoxFill } from "react-icons/ri"
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Conta = () => {
  return (
   <main className="main">
    <div className="login">
      <div className='insc'>
        <div className='texto'>
          <h1>tem conta?</h1>
          <h1>nao??</h1>
          <h1>faca uma!!</h1>
        </div>
        <button className='cad'>cadastrar-se</button>
      </div>
      <ul className="list">
        <Link to='/login'><li><RiAccountBox2Line/>aluno</li></Link>
        <Link to='/login' ><li><RiAccountPinBoxFill/>responsavel</li></Link>
        <Link to='/login'><li><RiAccountBoxFill/>professor</li></Link>
        <Link to='/login'><li><AiOutlineUserSwitch/>coordenador</li></Link>
      </ul>
     </div>
  </main>
  )
}

export default Conta