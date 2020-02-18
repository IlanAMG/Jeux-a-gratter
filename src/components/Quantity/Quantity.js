import React, { useState, useEffect, useContext } from 'react'
import FirebaseContext from '../../firebase/context';

import './Quantity.css'

const Quantity = () => {
    const { user, firebase, gemmesYellow, setGemmesYellow, tickets, setTickets } = useContext(FirebaseContext)
    const usersRef = firebase.db.collection('users').doc(user.uid)
    const [quantity, setQuantity] = useState(1)
    const [prixTotal, setPrixTotal] = useState(0)
    const [selectTickets, setSelectTickets] = useState(['ticket1'])
    
    const prix = 10

    const handleClickPlus = (e) => {
        e.preventDefault()
        setSelectTickets([...selectTickets, `ticket1`])  
        setQuantity(quantity => quantity + 1)
        
    }
    const handleClickMoins = (e) => {
        e.preventDefault()
        if (quantity > 1) {
            setSelectTickets(selectTickets.slice(0, selectTickets.length - 1))
            setQuantity(quantity => quantity - 1)
        } 
    }

    const handleBuy = (e) => {
        e.preventDefault()
       
        if (gemmesYellow >= prixTotal) {
            usersRef.update({ ticketsQuantity: usersRef.firestore._firebaseApp.firebase_.firestore.FieldValue.increment(quantity) })
            usersRef.update({ gemmesY: usersRef.firestore._firebaseApp.firebase_.firestore.FieldValue.increment(-prixTotal) })
            
            firebase.db.collection('users').doc(user.uid).get().then(function(doc) {    
                setGemmesYellow((doc.data().gemmesY))    
            }); 
            if (tickets) {
                setTickets([...tickets, ...selectTickets])
            } else {
                setTickets([...selectTickets])
            }
    
            alert(`Vous avez acheté ${selectTickets.length} tickets`)
            
            setSelectTickets(['ticket1'])
            setQuantity(1)
        } else {
            alert('Vous n\'avez pas assez de gemmes !')
        }      
    }
    
    useEffect(() => {
        setPrixTotal(prix * quantity)
    }, [quantity, prix])
    
    useEffect(() => {
        usersRef.update({
            mesTickets: tickets
        })
    }, [tickets, setTickets, usersRef])


    return (
            <form className='form-quantity'>
                <label>Quelle quantité ?</label>
                <div className='quantity'>
                    <input value={quantity} />
                    <button onClick={handleClickPlus} className='min-max'>+</button>
                    <button onClick={handleClickMoins} className='min-max'>-</button>
                </div>
                <div className='price'>
                    <label>Acheter {quantity} tickets pour {prixTotal} gemmes</label>
                    <button onClick={handleBuy}>Acheter</button>
                </div> 
                
            </form>
    )
}

export default Quantity
