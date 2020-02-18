import { useState, useEffect } from 'react'
import firebase from '../firebase/firebase';

export const useAuth = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(user => { 
            if (user) {
                

                const usersRef = firebase.db.collection('users').doc(user.uid)

                usersRef.get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                    usersRef.onSnapshot((doc) => {
                        console.log(doc)
                    });
                    } else { 
                        const newUser = {
                            id: user.uid,
                            name: user.displayName,
                        }
                    usersRef.set({newUser, 
                        gemmesG: 0,
                        gemmesY: 0,
                        mesTickets: [],
                        ticketsQuantity: 0
                    }) 
                    }
                })

               setAuthUser(user)

            } else {
                setAuthUser(null)             
            }
        })

        return () => unsubscribe() //le return dans un useEffect est l'équivalent d'un willunmount, on fait ça pour que l'objet user disparaisse quand l'user part de l'appli
    }, [])

    return authUser
}