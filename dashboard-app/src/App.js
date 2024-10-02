import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
