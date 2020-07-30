import React from 'react';
import "./App.css";
import APOD from './components/APOD';

function App() {


  return (
    <div className="container">
      <h1>Astronomy Picture of the Day</h1>
      <APOD />
    </div>
  );
}

export default App;
