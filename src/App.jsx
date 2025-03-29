import { useState } from 'react';
import './App.css';
import Bg from './Background/Bg';
import Container from './Container';
import Top from './topsection/Top';

function App() {
 
  

  return (
    <div className="core">
      <Top/>
      <Bg/>
      <Container/>
    </div>
  );
}

export default App;
