import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <div>
          <h1>Home</h1>
        </div>
      </header>
      <div className="side-bar">
        <h1>MRai Dashboard</h1>
      </div>
      <div className="container">
        <div className="main">

        </div>
      </div>
    </>
  );
}
export default App;
