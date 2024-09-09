import React from 'react';
import BalanceChart from './components/BalanceChart';
import AccountDetails from './components/AccountDetails';
import ConsistencyScore from './components/ConsistencyScore';
import TradingObjectives from './components/TradingObjectives';
import InsuranceOffer from './components/InsuranceOffer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="chart-section">
        <h3>Resultados Actuales</h3>
        <BalanceChart />
      </div>
      <div className="details-section">
        <AccountDetails />
      </div>
      <ConsistencyScore /> {/* Sección de puntaje de consistencia */}
      <TradingObjectives /> {/* Sección de objetivos de trading */}
      <InsuranceOffer />
    </div>
  );
}

export default App;
