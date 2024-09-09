import React, { useState } from 'react';

const AccountDetails = () => {

  return (
    <div className="account-details-container">
      <div className="account-row">
        <span className="account-label">Estado</span>
        <span className="account-value">Activo</span>
      </div>
      <div className="account-row">
        <span className="account-label">Inicio</span>
        <span className="account-value">13/08/2024</span>
      </div>
      <div className="account-row">
        <span className="account-label">Día de Recompensa</span>
        <span className="account-value">11/09/2024</span>
      </div>
      <div className="account-row">
        <span className="account-label">Ratio de Recompensa</span>
        <span className="account-value ratio-container">
          <div className="ratio-bar">
            <div className="ratio-value" style={{ width: '80%' }}>80</div>
          </div>
          <div className="ratio-remaining">20</div>
        </span>
      </div>
      <div className="account-row">
        <span className="account-label">Tamaño de cuenta</span>
        <span className="account-value">$400,000.00</span>
      </div>
      <div className="account-row">
        <span className="account-label">Tipo de Cuenta</span>
        <span className="account-value">Real</span>
      </div>
      <div className="account-row">
        <span className="account-label">Plataforma (MT5)</span>
        <span className="account-value link">Descargar</span>
      </div>
      <div className="account-row">
        <span className="account-label">Última actualización</span>
        <span className="account-value">08/09/2024 18:57:21</span>
      </div>
    </div>
  );
};

export default AccountDetails;
