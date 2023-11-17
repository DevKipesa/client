import React from 'react';
import Navbar from '../navbar/navbar';
import Dashboard from '../Dashboard/dashboard';
import Card from '../card/card';
import Card1 from '../card/card1';
import Log from '../logout/logout';
import './home.scss'
function home() {
  return (
    <div>
        <Navbar/>
        <Dashboard/>
        <div className='two'>
        <div className='car'>
        <Card/>
        <Card/>
        </div>
        <div className='tim'>
        <Card1 />
        <Card1 />
        
        </div>
        </div>
        <Log/>
    </div>
  )
}

export default home