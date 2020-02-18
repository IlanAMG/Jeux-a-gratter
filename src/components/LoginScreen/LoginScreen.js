import React, { useContext } from 'react'
import './LoginScreen.css'

import { FaFacebook } from 'react-icons/fa'
import { FaTwitter} from 'react-icons/fa'
import { FaGoogle} from 'react-icons/fa'
import { IoIosLogOut } from 'react-icons/io'

import FirebaseContext from '../../firebase/context';

const LoginScreen = () => {
    const { user, firebase } = useContext(FirebaseContext)

    const handleDispo = () => {
        alert('Pas encore disponible')
    }
    return (
        <div className='login-screen'>
            { !user ?
            (<>
                <span>Se connecter avec :</span>
                <button onClick={() => firebase.login('facebook')} className='login-btn fb'><FaFacebook className='login-i'/>Facebook</button>
                <button onClick={handleDispo} className='login-btn twi'><FaTwitter className='login-i'/>Twitter</button>
                <button onClick={handleDispo} className='login-btn glg'><FaGoogle className='login-i'/>Google</button>
            </>) 
            : 
            (<>
                <div className='logout-screen'>
                    <img className='profil-picture' src={user.photoURL} alt='Profil'/>
                    <span className='name'>{user.displayName}</span>
                    <span className='email'>{user.email}</span>
                </div>
                <span style={{cursor: 'pointer'}} onClick={() => firebase.logout()}><IoIosLogOut className='logout-i'/>Se déconnecter</span>
            </>)}
       </div>
    )
}

export default LoginScreen

