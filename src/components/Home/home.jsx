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
        <div className='car'>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <Card1 />
        <Log/>
    </div>
  )
}

export default home