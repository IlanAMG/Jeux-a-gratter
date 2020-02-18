import React, { useEffect, useState, useContext } from 'react'

import FirebaseContext from '../../firebase/context';

import canvas from '../../ASSETS/canvas.jpg'
import './Ticket.css'

export const Ticket = () => {
    const { user, firebase, setGemmesGreen, tickets, setTickets, quantityTotal, setQuantityTotal} = useContext(FirebaseContext)

    const [mouseDown, setMouseDown] = useState(false)
    const [ctx, setCtx] = useState(null)
    const [aleaLot, setAleaLot] = useState([])
    const [isPlay, setIsPlay] = useState(false)
    const mesGains = []

    // MA PROBABILITÉ 
    let lot = []

    for (let i = 0 ; i < 1500; i++ ) {
        lot.push({
            name: 'PERDU',
            nb: '',
            win: false
        })
    }

    for (let i = 0 ; i < 300; i++ ) {
        lot.push({
            name: 'Gemmes',
            nb: 10,
            win: true
        })
    }

    for (let i = 0 ; i < 200; i++ ) {
        lot.push({
            name: 'Gemmes',
            nb: 50,
            win: true
        })
    }

    for (let i = 0 ; i < 100; i++ ) {
        lot.push({
            name: 'Gemmes',
            nb: 200,
            win: true
        })
    }
    for (let i = 0 ; i < 50; i++ ) {
        lot.push({
            name: 'Gemmes',
            nb: 500,
            win: true
        })
    }
    for (let i = 0 ; i < 30; i++ ) {
        lot.push({
            name: 'Gemmes',
            nb: 1000,
            win: true
        })
    }
    for (let i = 0 ; i < 10; i++ ) {
        lot.push({
            name: 'Gemmes',
            nb: 5000,
            win: true
        })
    }
    for (let i = 0 ; i < 1; i++ ) {
        lot.push({
            name: 'Gemmes',
            nb: 10000,
            win: true
        })
    }
    // --------------

    const canvasRef = React.useRef(null)
    const img = new Image()
    img.src = canvas

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        setCtx(ctx)
        ctx.globalCompositeOperation='destination-over'
        img.onload = () => {
            ctx.drawImage(img, 0, 0)
        }  
        // eslint-disable-next-line 
    }, [])

    const handleMouseDown = () => {
        setMouseDown(true)
    }

    const handleMouseUp = () => {
        setMouseDown(false)
    }

    const handleMouseMove = (e) => {
            if (mouseDown && isPlay) {
                const x = e.nativeEvent.offsetX
                const y = e.nativeEvent.offsetY
                ctx.clearRect(x - 15, y - 15, 50, 50)
        }  
    }

    const CASE = [];

    const handleGenerate = () => {
        const newAleaLot1 = Math.floor(Math.random() * (lot.length - 0) + 0)
        const newAleaLot2 = Math.floor(Math.random() * (lot.length - 0) + 0)
        const newAleaLot3 = Math.floor(Math.random() * (lot.length - 0) + 0)
        setAleaLot([newAleaLot1, newAleaLot2, newAleaLot3])
        setIsPlay(true)
    }

    
    const handleRecup = () => {
        if (user) {
            const usersRef = firebase.db.collection('users').doc(user.uid)
            if (mesGains.length > 0) {
                for (let i = 0 ; i < mesGains.length ; i++) {
                    usersRef.update({ gemmesG: usersRef.firestore._firebaseApp.firebase_.firestore.FieldValue.increment(mesGains[i].nb)})
                    firebase.db.collection('users').doc(user.uid).get().then(function(doc) {    
                        setGemmesGreen((doc.data().gemmesG))    
                    });
                }
            } else {
                alert('Désolé, vous n\'avez aucun gain ! ')
            }
            
            const newListTickets = tickets.splice(0, tickets.length - 1)

            const newQuantity = quantityTotal - 1
            setQuantityTotal(newQuantity)
            usersRef.update({
                ticketsQuantity: newQuantity
            })
            setTickets(newListTickets)
            usersRef.update({
                mesTickets: newListTickets
            })
        }
    }

    if (aleaLot.length > 0) {
        for (let i = 0 ; i <= 2; i++ ) {
                let gain = aleaLot[i]
                CASE.push(<div className={`case case-${i}`}><span>{`${lot[gain].nb} ${lot[gain].name}`}</span></div>)
                if (lot[gain].win === true) {
                    mesGains.push(
                        {
                            nb : lot[gain].nb
                        }
                    )
                }
            }
    }
        
    return (
        <div className='ticket'>
            <h3 className='titre-jeu'>JEUX A GRATTER N°1</h3>
            { isPlay ? null : (<button onClick={handleGenerate} className='btn-play'>JOUER</button>)}
            { isPlay ? (<button onClick={handleRecup} className='btn-play'>RÉCUPERER LES RÉCOMPENSES</button>) : null}

            <div className='zone-grattage'>
                <canvas 
                    ref={canvasRef} 
                    className={ isPlay ? `canvas` : `canvas-disabled`}
                    width='750' 
                    height='250'
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    >
                </canvas>
                   {CASE}
                </div>  
            
            
        </div>
    )
}
