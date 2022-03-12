import React from 'react'
import './App.css';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
