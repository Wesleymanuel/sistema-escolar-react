import './Aluno.css'
import { CgNotes } from 'react-icons/cg'
import { FaAddressBook } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const Aluno = () => {

    const location = useLocation()
    const { nome, matricula } = location.state || {}

  return (
    <div className='aluno'>
        <div className='box'>
            <header>
                <nav>
                    <h3>nome:{nome}</h3>
                    <h3>matricula:{matricula}</h3>
                </nav>
            </header>
            <div className='atributos'>
                <h2><CgNotes/>notas</h2>
                <h2><FaAddressBook/>frequencia</h2>
            </div>
        </div>
    </div>
  )
}

export default Aluno