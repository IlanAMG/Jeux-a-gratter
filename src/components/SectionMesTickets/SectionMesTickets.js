import React, { useContext } from 'react'
import FirebaseContext from '../../firebase/context';

import { Ticket } from '../Ticket/Ticket';
import './SectionsMesTickets.css'

export const SectionMesTickets = () => {
    const { firebase, user, tickets, setTickets } = useContext(FirebaseContext)

    if (user) {
            firebase.db.collection('users').doc(user.uid).get().then(function(doc) {    
            setTickets(doc.data().mesTickets) 
        });
    }
    
    
    return (
        <section className='container-section-wrap'> 
            <div className='container-section'>
                <h2 className='titre-accueil'>Mes tickets</h2>
                <div className='container-tickets'>
                    {user && tickets.length > 0 ? tickets.map(ticket => (
                    <Ticket key={ticket.id} />)) 
                    : <p>Vous n'êtes pas connecté ou vous n'avez aucun ticket</p>} 
                </div>
            </div>
        </section>
           
    )
}
