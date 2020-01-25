import React, { useState } from 'react';
import Display from './Display'
import './App.css';
import Dashboard from './Dashboard';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const ballCount = () => {
    if (strikes >= 3 || balls >= 4) {
      setBalls(0);
  } else {
    setBalls(balls + 1)
  }};

  const strikeCount = () => {
    if (strikes >= 3 || balls >= 4) {
      setStrikes(0);
  } else {
    setStrikes(strikes + 1);
  }};

    const foulCount = () => {
      if (strikes === 0) {
        setStrikes(1)
    } 
    else if (strikes === 1) {
        setStrikes(strikes + 2)
    } else if (strikes ===2) {
        setStrikes(2)
    }}

    const hitCount = () => {
        setStrikes(0);
        setBalls(0);
    };
    return (
        <div className="container">
            <section className="scoreboard">
              <Display balls={balls} strikes={strikes}/>
              <Dashboard ballCount={ballCount} strikeCount={strikeCount} foulCount={foulCount} hitCount={hitCount}/>
            </section>
        </div>
    )
}

export default App;
