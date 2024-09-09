import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BalanceChart = () => {
  const data = {
    labels: Array.from({ length: 58 }, (_, i) => `Trade ${i + 1}`),
    datasets: [
      {
        label: 'Balance de la Cuenta',
        data: Array.from({ length: 58 }, (_, i) => 400000 + (i / 57) * 63302.31),
        fill: false,
        borderColor: 'rgb(90, 196, 180)',
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: 'white',  // Color blanco para la escala del eje Y
          callback: function (value) {
            return '$' + value.toLocaleString();
          }
        }
      },
      x: {
        ticks: {
          color: 'white'  // Color blanco para la escala del eje X
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default BalanceChart;

  