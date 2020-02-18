import React, { useContext } from 'react'
import FirebaseContext from '../../firebase/context';

import { FaGem } from "react-icons/fa";

import './SectionBoutique.css'



const SectionBoutique = () => {
    const { user, firebase, setGemmesYellow } = useContext(FirebaseContext)

    const handleA = () => {
        if (user) {
            const usersRef = firebase.db.collection('users').doc(user.uid)
            usersRef.update({ gemmesY: usersRef.firestore._firebaseApp.firebase_.firestore.FieldValue.increment(40)})
            firebase.db.collection('users').doc(user.uid).get().then(function(doc) {    
                setGemmesYellow((doc.data().gemmesY))    
            });
        } else {
            alert('Vous devez vous connecter pour acheter des gemmes !')
        }
          
   
    }

    const handleErr = () => {
        alert('Vous pouvez acheter par lot de 40 gemmes seulement pour le moment.')
    }
    
    return (
        <section className='container-section-wrap'>  
            <div className='container-section'>
                <h2 className='titre-accueil'>Simulation de boutique</h2>
                <div className='container-boutique'>
                    <div className='container-grid'>
                        <div onClick={handleA} className="cardgem a"><span><FaGem className='gem2'/>40</span><p>GRATUIT</p></div>
                        <div onClick={handleErr} className="cardgem b"><span><FaGem className='gem2'/>80</span><p>GRATUIT</p></div>
                        <div onClick={handleErr} className="cardgem c"><span><FaGem className='gem2'/>160</span><p>GRATUIT</p></div>
                        <div onClick={handleErr} className="cardgem d"><span><FaGem className='gem2'/>320</span><p>GRATUIT</p></div>
                        <div onClick={handleErr} className="cardgem e"><span><FaGem className='gem2'/>640</span><p>GRATUIT</p></div>
                        <div onClick={handleErr} className="cardgem f"><span><FaGem className='gem2'/>1280</span><p>GRATUIT</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBoutique