import './Conta.css'
import { Link } from 'react-router-dom'
import Ul from '../assets/Ul'


const Conta = () => {
  return (
   <main className="main">
    <div className="login">
      <div className='insc'>
        <div className='texto'>
          <h1>tem conta?</h1>
          <h1>faca uma!!</h1>
        </div>
      <Link to={'/login2'}><button className='cad'>cadastrar-se</button></Link>
    </div>
      <Ul className='list'/>
     </div>
  </main>
  )
}

export default Conta