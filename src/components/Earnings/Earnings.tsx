import { useState, useEffect } from 'react';
import './Earnings.scss';

interface EarningsData {
  total: number;
  online: {
    amount: number;
    percentage: number;
  };
  offline: {
    amount: number;
    percentage: number;
  };
}

function Earnings() {
  const [earnings, setEarnings] = useState<EarningsData | null>(null);

  useEffect(() => {
    import('../../data/data.json')
      .then((data) => {
        setEarnings(data.earnings);
      })
      .catch((error) => {
        console.error('Error loading data.json:', error);
      });
  }, []);

  if (!earnings) {
    return <div>Loading...</div>;
  }

  return (
    <div className="earnings">
      <h3>Earnings</h3>
      <div className="earnings-total">
        <div className="earnings-amount">${earnings.total}</div>
        <div className="earnings-label">Total Revenue</div>
      </div>
      <div className="earnings-breakdown">
        <div className="earnings-online">
          <div className="earnings-amount">${earnings.online.amount}</div>
          <div className="earnings-label">Online Earning</div>
          <div className="range-display">
            <div
              className="range-indicator"
              style={{ width: `${earnings.online.percentage}%` }}
            />
          </div>
          <div className="completion-text">{earnings.online.percentage}%</div>
        </div>
        <div className="earnings-offline">
          <div className="earnings-amount">${earnings.offline.amount}</div>
          <div className="earnings-label">Offline Earning</div>
          <div className="range-display">
            <div
              className="range-indicator"
              style={{ width: `${earnings.offline.percentage}%` }}
            />
          </div>
          <div className="completion-text">{earnings.offline.percentage}%</div>
        </div>
      </div>
    </div>
  );
}

export default Earnings;
