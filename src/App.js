import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Summary from './components/summary';
import {Divider} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

function App() {

  const [info, setInfo] = useState({});
  const [pools, setPools] = useState([]);
  const [invites, setInvites] = useState([]);
  const [view, setView] = useState('pools');

  useEffect(()=> {
    let url = "https://19644217.ngrok.io/admin/?user=UFADUFJUS";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setInfo(result.info);
          setPools(result.pools);
          setInvites(result.invites)
        }
      );
  }, []);

  const handleClick = (e, data) => {
    e.preventDefault();
    setView(data.name);
  }

  return (
    <React.Fragment>
      <NavBar view={view}
      onHandleClick={(e, data) =>{handleClick(e, data)}}/>
      <Divider className = 'yellow' section />
      <div className = 'yellow welcome'><span>🎉 Welcome {info.firstName||'James'} 🚀</span></div>
      <Summary 
        items={view==='pools'?pools:invites}
        view={view}
      />
    </React.Fragment>
    );
}

export default App;
