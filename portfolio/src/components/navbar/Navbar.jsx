
import "./navbar.css"
import logo from "../../assets/logo.webp"
import theme_pattern from "../../assets/theme_pattern.svg"


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo-img' />
        <img src={theme_pattern} alt="" className='theme'/>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect with Me</div>
    </div>
  )
}

export default Navbar