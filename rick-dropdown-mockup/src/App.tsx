import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from "./Dropdown";

const options = ['Cheque Account', 'Saving Account', 'Coin Account'];
function App() {
  return (
    <div className="App">
        <Dropdown options={options} />
    </div>
  );
}

export default App;
