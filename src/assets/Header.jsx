import Button1 from "../Buttons/Button1";
import Button2 from "../Buttons/Button2";
import './Header.css'

const Header = () => {
  return (
    <header className='header'> 
        <h1>escola</h1>
        <input type="text" />
        <ul className='ul'>
            <Button1/>
            <Button2/>
        </ul>
    </header>
  )
}

export default Header