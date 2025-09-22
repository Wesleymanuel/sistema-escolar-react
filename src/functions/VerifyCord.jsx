import { db } from '../firebase/Firebase.js'
import { useNavigate } from "react-router-dom"

const Verify = ({nome,senha,matricula,email}) => {

    const navigate2 = useNavigate()

    function verify(){
        db.collection("coordenador").get().then(snapshot => {
            snapshot.forEach(doc => {
                const data = doc.data()                
                if(data.nome == nome && data.senha == senha && data.matricula == matricula && data.email == email){
                    navigate2("/coordenador")
                }else{
                    alert("usuario nao encontrado, tente novamente")
                }
            })
        })
    }

  return (
    <div className='bot'>
        <button id='button' onClick={verify}>acessar</button>       
    </div>
  )
}

export default Verify