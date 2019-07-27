import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ConcurrentModeDemo from './ConcurrentMode/index';
import StateHook from './hook/stateHook';
import PrepareForEffectHook from './hook/prepareForEffectHook';
import EffectHookDemo from './hook/effectHook';
import ReducerHook from './hook/ReducerHook';

function App() {
  return (
    <div>
      {/* <ConcurrentModeDemo /> */}
      <StateHook />
      EffectHookDemo:
      <EffectHookDemo />
      ReducerHook:
      <ReducerHook />
      <PrepareForEffectHook />
    </div>
  )
}

export default App;
