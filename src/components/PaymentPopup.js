import React from 'react';
import checkoutLogo from '../assets/checkout.png';
import nuveiLogo from '../assets/nuvei.png';
import skrillLogo from '../assets/skrill.png';
import netellerLogo from '../assets/neteller.png';
import mastercardLogo from '../assets/mastercard.png';
import visaLogo from '../assets/visa.png';
import applePayLogo from '../assets/apple-pay.png';
import googlePayLogo from '../assets/google-pay.png';

const PaymentPopup = () => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>ESTIMADO TRADER</h2>
        <p>SU SOLICITUD DE SEGURO HA SIDO ACEPTADA Y ESTÁ PENDIENTE DE LA REALIZACIÓN DEL PAGO. A CONTINUACIÓN, SELECCIONE SU MÉTODO DE PAGO PARA COMPLETAR EL PROCESO.</p>
        <div className="payment-methods">
          {/* First method - Checkout */}
          <div className="method">
            <img src={checkoutLogo} alt="Checkout Logo" className="payment-logo" />
            <div className="payment-divider"></div>
            <div className="payment-icons">
              <img src={mastercardLogo} alt="Mastercard" />
              <img src={visaLogo} alt="Visa" />
            </div>
          </div>

          {/* Second method - Nuvei */}
          <div className="method">
            <img src={nuveiLogo} alt="Nuvei Logo" className="payment-logo" />
            <div className="payment-divider"></div>
            <div className="payment-icons">
              <img src={mastercardLogo} alt="Mastercard" />
              <img src={applePayLogo} alt="Apple Pay" />
              <img src={googlePayLogo} alt="Google Pay" />
              <img src={visaLogo} alt="Visa" />
            </div>
          </div>

          {/* Third method - Skrill */}
          <div className="method">
            <img src={skrillLogo} alt="Skrill Logo" className="payment-logo" />
            <div className="payment-divider"></div>
            <div className="payment-icons">
              <img src={mastercardLogo} alt="Mastercard" />
              <img src={visaLogo} alt="Visa" />
            </div>
          </div>

          {/* Fourth method - Neteller */}
          <div className="method">
            <img src={netellerLogo} alt="Neteller Logo" className="payment-logo" />
            <div className="payment-divider"></div>
            <div className="payment-icons">
              <img src={mastercardLogo} alt="Mastercard" />
              <img src={visaLogo} alt="Visa" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
