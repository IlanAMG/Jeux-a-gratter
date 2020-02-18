import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { MdAccountCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { FaGem } from "react-icons/fa";


import LoginScreen from '../LoginScreen/LoginScreen'

import './Header.css'
import FirebaseContext from '../../firebase/context';


const Header = () => {
    const [isClick, setIsClick] = useState(false)
    const { gemmesGreen, gemmesYellow } = useContext(FirebaseContext)

    const handleClick = () => {
        setIsClick(isClick => !isClick)
    }

    return (
        <>
        <div className='topbar-wrap'>
            <nav className='topbar'>
                <div className='topbar-container'>
                    <ul className='menu-logo'>
                        <li><div className='topbar-btn menu'><FiMenu className='icons-top'/></div></li>
                        <li><Link className='topbar-btn  logo' to='/'>Jeux à Gratter</Link></li>
                        <li><span>Tente ta chance et remporte jusqu'à 100 000€</span></li>
                    </ul>
                    <ul className='gemmes-login'>
                        <li><Link className='topbar-btn  gemmes' to='/transfert'><FaGem className='icons-top gem1'/>{gemmesGreen}</Link></li>
                        <li><Link className='topbar-btn  gemmes' to='/boutique'><FaGem className='icons-top gem2'/>{gemmesYellow}</Link></li>
                        {/* <li><Link className='topbar-btn  gemmes' to='/freegems'><FaGem className='icons-top gem3'/>{gemmesRed}</Link></li> */}
                        <li onClick={handleClick} className='topbar-account'><div className='topbar-btn  login' to='/'><MdAccountCircle className='icons-top'/><IoIosArrowDown className='icons-top'/></div></li>
                    </ul> 
                </div>  
            </nav>
        </div>
            { isClick ? <LoginScreen /> : null}
        </>
    )
}

export default Header

