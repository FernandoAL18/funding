import React from 'react';
import { Link } from 'react-router-dom'; // Added for routing purposes
import BalanceChart from './components/BalanceChart';
import AccountDetails from './components/AccountDetails';
import ConsistencyScore from './components/ConsistencyScore';
import TradingObjectives from './components/TradingObjectives';
import InsuranceOffer from './components/InsuranceOffer';
import PaymentPopup from './components/PaymentPopup';
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
      <ConsistencyScore /> 
      <TradingObjectives /> 
      <InsuranceOffer />
      <PaymentPopup />  
      {/* Add a link to Metrix */}
      <Link to="/metrix/530089422">Go to Metrix</Link> 
    </div>
  );
}

export default App;
