import React from 'react';
import './dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faMoneyBillWave, faClock, faEye } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div className='one'>
      <div className='dash'>
        <div className='dev'>
          <FontAwesomeIcon icon={faCode} />
          DEVELOPMENT
        </div>

        <div className='infra'>
          <FontAwesomeIcon icon={faServer} />
          INFRASTRUCTURE
        </div>

        <div className='fund'>
          <FontAwesomeIcon icon={faMoneyBillWave} />
          FUNDS
        </div>

        <div className='time'>
          <FontAwesomeIcon icon={faClock} />
         TIMELINE
        </div>

        <div className='view'>
          <FontAwesomeIcon icon={faEye} />
          VIEWS
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
