import Button2 from "../Buttons/Button2"
import Button1 from "../Buttons/Button1"
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="nav">
        <h1  className="logo">logo</h1>
        <input className="search" type="text" placeholder="navegar.." />
        <div className="imports">
            <Link to='/Reclame'><Button2/></Link>
            <Link to='/conta'><Button1/></Link>
        </div>
    </div>
  )
}

export default Header