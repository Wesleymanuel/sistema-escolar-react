import './Aluno.css'
import { CgNotes } from 'react-icons/cg'
import { FaAddressBook } from 'react-icons/fa'

const Aluno = () => {
  return (
    <div className='aluno'>
        <div className='box'>
            <header>
                <nav>
                    <h1>nome:</h1>
                </nav>
            </header>
            <div className='atributos'>
                <h1><CgNotes/>notas</h1>
                <h1><FaAddressBook/>frequencia</h1>
            </div>
        </div>
    </div>
  )
}

export default Aluno