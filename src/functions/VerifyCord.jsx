import { db } from '../firebase/Firebase.js'

const Verify = ({nome,senha,matricula,email}) => {

    function verify(){
        db.collection("coordenador").get().then(snapshot => {
            snapshot.forEach(doc => {
                const data = doc.data()                
                if(data.nome == nome && data.senha == senha && data.matricula == matricula && data.email == email){
                    console.log("deu certo")
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