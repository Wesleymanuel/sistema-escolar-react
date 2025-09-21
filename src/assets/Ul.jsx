import './Ul.css'
import { RiAccountBoxFill } from 'react-icons/ri'
import { RiAccountBox2Line } from "react-icons/ri"
import { RiAccountPinBoxFill } from "react-icons/ri"
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Ul = () => {
  return (
    <ul className="list">
        <Link to='/loginaluno'><li><RiAccountBox2Line/>aluno</li></Link>
        <Link to='/login' ><li><RiAccountPinBoxFill/>responsavel</li></Link>
        <Link to='/loginprof'><li><RiAccountBoxFill/>professor</li></Link>
        <Link to='/logincord'><li><AiOutlineUserSwitch/>coordenador</li></Link>
    </ul>
  )
}

export default Ul