import React from 'react';
import checkoutLogo from './assets/checkout.png';
import nuveiLogo from './assets/nuvei.png';
import skrillLogo from './assets/skrill.png';
import netellerLogo from './assets/neteller.png';
import mastercardIcon from './assets/mastercard.png';
import visaIcon from './assets/visa.png';
import applePayIcon from './assets/apple-pay.png';
import googlePayIcon from './assets/google-pay.png';

const PaymentPopup = () => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>Seguro de Cuenta Aceptado</h2>
        <p>
          Estimado Trader, su solicitud de seguro ha sido aceptada y está pendiente de la realización del pago. A continuación, seleccione su método de pago para completar el proceso.
        </p>
        <div className="payment-methods">
          {/* Primer método de pago */}
          <div className="method">
            <img src={checkoutLogo} alt="Checkout Logo" className="payment-logo" />
            <hr className="payment-divider" />
            <div className="payment-icons">
              <img src={mastercardIcon} alt="Mastercard Icon" />
              <img src={visaIcon} alt="Visa Icon" />
            </div>
          </div>
          {/* Segundo método de pago */}
          <div className="method">
            <img src={nuveiLogo} alt="Nuvei Logo" className="payment-logo" />
            <hr className="payment-divider" />
            <div className="payment-icons">
              <img src={mastercardIcon} alt="Mastercard Icon" />
              <img src={applePayIcon} alt="Apple Pay Icon" />
              <img src={googlePayIcon} alt="Google Pay Icon" />
              <img src={visaIcon} alt="Visa Icon" />
            </div>
          </div>
          {/* Tercer método de pago */}
          <div className="method">
            <img src={skrillLogo} alt="Skrill Logo" className="payment-logo" />
            <hr className="payment-divider" />
            <div className="payment-icons">
              <img src={mastercardIcon} alt="Mastercard Icon" />
              <img src={visaIcon} alt="Visa Icon" />
            </div>
          </div>
          {/* Cuarto método de pago */}
          <div className="method">
            <img src={netellerLogo} alt="Neteller Logo" className="payment-logo" />
            <hr className="payment-divider" />
            <div className="payment-icons">
              <img src={mastercardIcon} alt="Mastercard Icon" />
              <img src={visaIcon} alt="Visa Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
