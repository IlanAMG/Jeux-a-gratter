import React from 'react'
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaGem } from "react-icons/fa";

import NotifTickets from '../NotifTickets/NotifTickets';

import './Layout.css'

const Layout = () => {
    return (
            <div className='container-layout'>
                <ul>
                    <li><Link className='btn' to='/'><MdHome className='icons' />Accueil</Link></li>
                    <li><Link className='btn' to='/mestickets'><NotifTickets /><FaTicketAlt className='icons'/>Mes tickets</Link></li>
                    <li><Link className='btn' to='/boutique'><FaStore className='icons'/>Boutique</Link></li>
                    <li><Link className='btn' to='/transfert'><FaExchangeAlt className='icons'/>Mes gains</Link></li>
                    <li><Link className='btn' to='/freegems'><FaGem className='icons'/>Free Gems</Link></li>
                </ul>
            </div>
    )
}

export default Layout
