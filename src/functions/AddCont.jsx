import { db } from '../firebase/Firebase.js'
import './Add.css'

const AddCont = ({nome,email,senha}) => {

    function addCont(){
        db.collection("aluno").add({
            nome: nome,
            email: email,
            senha: senha
        })
         .then( () => {
             console.log("aluno inseriddo com sucesso")
        }).catch(() => {
            console.log("falha ao inserir")
        })
    }

  return (
    <div className='boto'>
        <button className='bott' onClick={addCont}>acessar</button>
    </div>
  )
}

export default AddCont