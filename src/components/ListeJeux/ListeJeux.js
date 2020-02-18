import React from 'react'

import testjeu from '../../ASSETS/testjeu.jpg'

const ListeJeux = () => {

    const handleNotReady = () => {
        alert('Les autres jeux ne sont pas encore disponibles')
    }

    return (
        <>
            <h2 className='titre-accueil'>Tous les jeux à gratter</h2>
                <div className="container-card">
                    <div onClick={handleNotReady} className='card'>
                        <img alt='img' src={testjeu}/>
                        <div className='card-desc'>
                            <span>Gagnez jusqu'à 1000€ !</span>
                        </div>
                        <div className='card-card-jouer'>
                            <h3>JOUER</h3>
                            <span>Coût : 1 Gemme</span>
                        </div>
                    </div> 
                    <div onClick={handleNotReady} className='card'>
                        <img alt='img' src={testjeu}/>
                        <div className='card-desc'>
                            <span>Gagnez jusqu'à 1000€ !</span>
                        </div>
                        <div className='card-card-jouer'>
                            <h3>JOUER</h3>
                            <span>Coût : 1 Gemme</span>
                        </div>
                    </div> 
                    <div onClick={handleNotReady} className='card'>
                        <img alt='img' src={testjeu}/>
                        <div className='card-desc'>
                            <span>Gagnez jusqu'à 1000€ !</span>
                        </div>
                        <div className='card-card-jouer'>
                            <h3>JOUER</h3>
                            <span>Coût : 1 Gemme</span>
                        </div>
                    </div> 
                    <div onClick={handleNotReady} className='card'>
                        <img alt='img' src={testjeu}/>
                        <div className='card-desc'>
                            <span>Gagnez jusqu'à 1000€ !</span>
                        </div>
                        <div className='card-card-jouer'>
                            <h3>JOUER</h3>
                            <span>Coût : 1 Gemme</span>
                        </div>
                    </div> 
                    <div onClick={handleNotReady} className='card'>
                        <img alt='img' src={testjeu}/>
                        <div className='card-desc'>
                            <span>Gagnez jusqu'à 1000€ !</span>
                        </div>
                        <div className='card-card-jouer'>
                            <h3>JOUER</h3>
                            <span>Coût : 1 Gemme</span>
                        </div>
                    </div> 
                    <div onClick={handleNotReady} className='card'>
                        <img alt='img' src={testjeu}/>
                        <div className='card-desc'>
                            <span>Gagnez jusqu'à 1000€ !</span>
                        </div>
                        <div className='card-card-jouer'>
                            <h3>JOUER</h3>
                            <span>Coût : 1 Gemme</span>
                        </div>
                    </div> 
                    <div onClick={handleNotReady} className='card'>
                        <img alt='img' src={testjeu}/>
                        <div className='card-desc'>
                            <span>Gagnez jusqu'à 1000€ !</span>
                        </div>
                        <div className='card-card-jouer'>
                            <h3>JOUER</h3>
                            <span>Coût : 1 Gemme</span>
                        </div>
                    </div> 
                    <div onClick={handleNotReady} className='card'>
                        <img alt='img' src={testjeu}/>
                        <div className='card-desc'>
                            <span>Gagnez jusqu'à 1000€ !</span>
                        </div>
                        <div className='card-card-jouer'>
                            <h3>JOUER</h3>
                            <span>Coût : 1 Gemme</span>
                        </div>
                    </div> 
                    <div onClick={handleNotReady} className='card'>
                        <img alt='img' src={testjeu}/>
                        <div className='card-desc'>
                            <span>Gagnez jusqu'à 1000€ !</span>
                        </div>
                        <div className='card-card-jouer'>
                            <h3>JOUER</h3>
                            <span>Coût : 1 Gemme</span>
                        </div>
                    </div> 
                </div>
        </>
    )
}

export default ListeJeux
