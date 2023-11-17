import React from 'react';
import Navbar from '../navbar/navbar';
import Dashboard from '../Dashboard/dashboard';
import Card from '../card/card';
function home() {
  return (
    <div>
        <Navbar/>
        <Dashboard/>
        <Card/>
    </div>
  )
}

export default home