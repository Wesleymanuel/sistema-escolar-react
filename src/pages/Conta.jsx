import Header from "../assets/Header"
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
      <ul className="list">
        <Link><li><RiAccountBox2Line/>aluno</li></Link>
        <Link><li><RiAccountPinBoxFill/>responsavel</li></Link>
        <Link><li><RiAccountBoxFill/>professor</li></Link>
        <Link><li><AiOutlineUserSwitch/>coordenador</li></Link>
      </ul>
     </div>
  </main>
  )
}

export default Conta