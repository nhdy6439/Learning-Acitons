import React from 'react';
import { Button } from 'antd'
import './App.css';
import Test from './Test.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test></Test>
        <Button type="primary">antd primary actions</Button>
      </header>
    </div>
  );
}

export default App;
