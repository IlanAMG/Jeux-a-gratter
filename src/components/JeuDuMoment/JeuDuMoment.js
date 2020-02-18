import React, { useState, useContext } from 'react'

import testjeu from '../../ASSETS/testjeu.jpg'

import Quantity from '../Quantity/Quantity';

import FirebaseContext from '../../firebase/context';

const JeuDuMoment = () => {
    const [isOver, setIsOver] = useState(false)

    const { user } = useContext(FirebaseContext)

    const handleEnter = () => {
          setIsOver(isOver => !isOver)  
    }

    const handleLeave = () => {
        setIsOver(isOver => !isOver)
    }

    return (
        <>
            <h2 className='titre-accueil'>Notre jeu du moment</h2>
                <div className="container-principal">
                    <div className='image-jeu'><img alt='img' src={testjeu}/>
                        <div className='desc'>
                            <span>Gagnez jusqu'à 1000€ !</span>
                        </div>
                        <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className='card-jouer'>
                            <h3>JOUER</h3>
                            <span>Coût : 10 Gemmes</span>
                            {user && isOver ? <Quantity /> : null}
                            {!user && isOver ? <span>Se connecter pour acheter un ticket</span> : null}
                        </div>
                    </div> 
                </div>
        </>
    )
}

export default JeuDuMoment
