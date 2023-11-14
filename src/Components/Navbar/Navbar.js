import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.png"
import { HiMenu, HiXCircle } from 'react-icons/hi'
import './Navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div id='navbar'>
            <nav>
                <img src={Logo} alt='logo' className='logo' />
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? (
                        <HiXCircle id="icons" />
                    ) : (
                        <HiMenu id="icons" />
                    )}
                </div>
                <ul className={`menu-toggle ${menuOpen ? 'open' : ''}`}>
                    <li><Link exact to='/portfolio'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/works'>Works</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
