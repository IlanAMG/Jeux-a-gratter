import React, { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import firebase from './firebase/firebase';
import FirebaseContext from './firebase/context';
import { useAuth } from './hooks/useAuth';


import Accueil from './pages/Accueil/Accueil';
import Boutique from './pages/Boutique/Boutique';
import FreeGems from './pages/FreeGems/FreeGems';
import MesTickets from './pages/MesTickets/MesTickets';
import Transfert from './pages/Transfert/Transfert';

const App = () => {
  const user = useAuth()

  const [gemmesGreen, setGemmesGreen] = useState(0)
  const [gemmesYellow, setGemmesYellow] = useState(0)
  const [quantityTotal, setQuantityTotal] = useState(0)
  const [tickets, setTickets] = useState([])

  if (user && firebase.db.collection('users').doc(user.uid)) {
    firebase.db.collection('users').doc(user.uid).get().then(function(doc) {  
        setGemmesGreen((doc.data().gemmesG))   
        setGemmesYellow((doc.data().gemmesY))    
        setQuantityTotal((doc.data().ticketsQuantity))
    }).catch(function(err) {
      console.log(err)
    });;
    
}

  return (
    <FirebaseContext.Provider value={{ user, firebase, 
                                       gemmesGreen, setGemmesGreen,
                                       gemmesYellow, setGemmesYellow, 
                                       quantityTotal, setQuantityTotal,
                                       tickets, setTickets }}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/mestickets" component={MesTickets} />
          <Route path="/boutique" component={Boutique} />
          <Route path="/transfert" component={Transfert} />
          <Route path="/freegems" component={FreeGems} />
        </Switch>
      </div>
    </Router>
    </FirebaseContext.Provider> 
  )
}

export default App