import './App.css';
import BankAccount from './components/BankAccount/BankAccount';
import BetList from './components/BetList/BetList';
import React from 'react';




function App() {

  const [betList, setBetList] = React.useState([100]);

  const addBet = () => {
    const newBetList = [...betList, betList[betList.length-1]+5];
    setBetList(newBetList);
  }


  return (
    <div className="App">
      <BankAccount/>

      <h2>Lista de pujas:</h2>
      <ul>
        {betList.map(bet => <li key={bet}>{bet}</li>)}
      </ul>

      <h2>Participantes:</h2>
      <BetList addBet={addBet} name="Pablo"/>
      <BetList addBet={addBet} name="Fran"/>
      <BetList addBet={addBet} name="Javier"/>
    </div>
  );
}

export default App;
