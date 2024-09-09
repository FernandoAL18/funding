import React from 'react';

const TradingObjectives = () => {
  return (
    <div className="trading-objectives-container">
      <h2>Objetivos</h2>
      <table className="objectives-table">
        <thead>
          <tr>
            <th>Objetivos de Trading</th>
            <th>Resultados</th>
            <th>Resumen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="objective-title">+ Pérdida máxima del día -$20,000</td>
            <td className="result">-</td>
            <td className="status approved">
              <span className="status-icon green">✔</span> Aprobado
            </td>
          </tr>
          <tr>
            <td className="objective-title">+ Pérdida Máx. -$40,000</td>
            <td className="result">-</td>
            <td className="status approved">
              <span className="status-icon green">✔</span> Aprobado
            </td>
          </tr>
          <tr>
            <td className="objective-title">+ Beneficio</td>
            <td className="result">$65,577.39</td>
            <td className="status approved">
              <span className="status-icon green">✔</span> Aprobado
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TradingObjectives;
