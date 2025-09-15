import './Login.css'
import { GoPasskeyFill } from 'react-icons/go'

const Login = () => {
  return (
    <main className='forms'>
        <div className='div'>
            <input type="text" placeholder="nome" id='nome' />
            <input type="email" id='email' placeholder="xxxxxxx@gmail.com" />
            <input type="password" id='senha' placeholder="......" />
            <input type="number" id='matri' placeholder='matricula' />
            <label name="box" id='boxe'>esqueceu algo</label>
            <input type="checkbox" name='box' id='box' />
            <div className='bot'>
              <button id='button'>acessar</button>
            </div>
        </div>
    </main>
  )
}

export default Login