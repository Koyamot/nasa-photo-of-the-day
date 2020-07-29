import React, { useState, useEffect} from "react";
import "./App.css";
import APOD from './components/APOD'

function App() {


  return (
    <div className="container">
      <h1>NASA: A Photo a Day</h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <APOD />
    </div>
  );
}

export default App;
