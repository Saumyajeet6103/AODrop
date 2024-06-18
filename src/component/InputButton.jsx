import React from 'react';
import './inputButtonStyle.css';

const InputButtonComponent = () => {
  return (
    <div className="input-button-container">
      <div className="yellow-box">
        <div className="text-boxes">
          <div className="big-text">
            Instant Transfer at Your Fingertips with
          </div>
          <div className="big-text" style={{ color: 'yellow' }}>AO Airdrop</div> {/* Change color inline */}
          <div className="small-text">
            Simply enter your address and press <span style={{ color: 'red' }}>Claim</span> to automatically receive your airdrop
          </div>
        </div>
        <div className="input-field-container">
          <input type="text" placeholder="Enter text..." className="input-field" />
          <button className="button">Claim</button>
        </div>
      </div>
    </div>
  );
}

export default InputButtonComponent;


