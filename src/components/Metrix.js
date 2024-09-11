import React from 'react';
import BalanceChart from './BalanceChart';
import AccountDetails from './AccountDetails';
import ConsistencyScore from './ConsistencyScore';
import TradingObjectives from './TradingObjectives';
import InsuranceOffer from './InsuranceOffer';
import PaymentPopup from './PaymentPopup';

const Metrix = () => {
  return (
    <div>
      <h1>Metrix Dashboard</h1>
      <BalanceChart />
      <AccountDetails />
      <ConsistencyScore />
      <TradingObjectives />
      <InsuranceOffer />
      <PaymentPopup />
    </div>
  );
};

export default Metrix;
