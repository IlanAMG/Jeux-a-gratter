import React from 'react'
import './SectionPrincipale.css'

import JeuDuMoment from '../JeuDuMoment/JeuDuMoment';
import ListeJeux from '../ListeJeux/ListeJeux';



const SectionPrincipale = () => {
    
    return (
        <section className='container-section-wrap'>  
            <div className='container-section'>
                <JeuDuMoment />
                <ListeJeux />
            </div>
        </section>
    )
}

export default SectionPrincipale
