import { useState, useEffect } from 'react'
import './App.css'
import basicGraph from './assets/data.vg.json'
import Chart from './Chart'

import customGraph from './assets/custommap.vg.json'
import homework9 from "./hw9Map"
function App() {

  return (
    <>
      <h1>Australia's Ravaged States</h1>
      {/* <p>Map of Australian natural diasters</p> */}
      <Chart spec={homework9 }/>
      {/* <Chart spec={basicGraph} /> */}
    </>
  )
}

export default App
