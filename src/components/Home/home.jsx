import React from 'react';
import Navbar from '../navbar/navbar';
import Dashboard from '../Dashboard/dashboard';
import Card from '../card/card';
import Card1 from '../card/card1';
function home() {
  return (
    <div>
        <Navbar/>
        <Dashboard/>
        <Card/>
        <Card1 />
    </div>
  )
}

export default home