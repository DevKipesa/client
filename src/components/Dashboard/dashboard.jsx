import React from 'react';
import './dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faMoneyBillWave, faClock, faEye } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div className='one'>
      <div className='dash'>
      <div className='dashb'>
          <FontAwesomeIcon icon={faCode} />
          DASHBOARD
        </div>
        <div className='dev'>
          <FontAwesomeIcon icon={faCode} />
          DASHBOARD
        </div>

        <div className='infra'>
          <FontAwesomeIcon icon={faServer} />
          PROJECTS
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
