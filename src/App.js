import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Header } from './Elements/Header';
import { Hero } from './Elements/Hero';
import { COffense } from './Elements/COffense';
import { Ohero } from './Elements/Ohero';
import { Defense } from './Elements/Control';
import { Chero } from './Elements/CHero';
import { FOffense } from './Elements/FOffense';
import { Fhero } from './Elements/FHero'
import { TOffense } from './Elements/TOffense';
import { Thero } from './Elements/THero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <COffense />
      <Ohero />
      <Defense />
      <Chero />
      <FOffense />
      <Fhero /> 
      <TOffense />
      <Thero /> 
    </div>
  );
}

export default App;
