
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from "./Header.js";
import Content from "./Content.js";

function App() {
  return (
    <div className="Wrapper">
      <BrowserRouter>
        <Header/>
        <Content/>
      </BrowserRouter>
    </div>
  );
}

export default App;
