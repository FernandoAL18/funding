import React from 'react';

const ConsistencyScore = () => {
  return (
    <div className="consistency-score">
      <h3>Puntaje de consistencia</h3>
      <div className="bar-container">
        <div className="bar">
          <div className="section red" style={{ width: '30%' }}>
            <span className="progress-text">0 - 30 %</span>
          </div>
          <div className="section yellow" style={{ width: '50%' }}>
            <span className="progress-text">30 - 80 %</span>
          </div>
          <div className="section green" style={{ width: '20%' }}>
            <span className="progress-text">80 - 100 %</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsistencyScore;
