import { useState, useEffect } from 'react'
import './App.css'
import basicGraph from './assets/data.vg.json'
import Chart from './Chart'

import customGraph from './assets/baseWorld.json'
function App() {

  return (
    <>
      <h1>Chart</h1>
      <Chart spec={customGraph }/>
      {/* <Chart spec={basicGraph} /> */}
    </>
  )
}

export default App
