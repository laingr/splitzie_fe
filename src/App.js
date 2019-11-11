import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Summary from './components/summary';

import 'semantic-ui-css/semantic.min.css'

function App() {

  const [info, setInfo] = useState([{title:'one'},{title:'two'}]);
  const [pools, setPools] = useState([{title:'one'},{title:'two'}]);
  const [invites, setInvites] = useState([{title:'one'},{title:'two'}]);

  useEffect(()=> {
    let url = "https://19644217.ngrok.io/admin/:id";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setPools(result);
        }
      );
  }, [])

  return (
    <React.Fragment>
      <NavBar />
      <Summary 
        title = 'My Pools'
        status= {false}
        items={pools}
      />
    </React.Fragment>
    );
}

export default App;
