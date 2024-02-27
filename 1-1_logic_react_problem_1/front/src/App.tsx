import React from 'react';

import './App.css';
import Shipments from './componentes/shipments';
import FutureShipments from './componentes/futureShipments';
import {Couriers,Packages} from './api/data'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>FAILED</h1>
      </header>
      <Shipments />
      <FutureShipments />
    </div>
  );
}

export default App;
