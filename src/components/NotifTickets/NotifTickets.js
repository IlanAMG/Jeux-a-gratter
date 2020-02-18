import React, { useContext } from 'react'
import './NotifTickets.css'
import FirebaseContext from '../../firebase/context';


const NotifTickets = () => {

    const { quantityTotal } = useContext(FirebaseContext)
    return (
            <div className='notif'>
                <span>{quantityTotal}</span>
            </div>
    )
}

export default NotifTickets
