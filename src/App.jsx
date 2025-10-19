import { useState, useEffect } from 'react'
import './App.css'
import basicGraph from './assets/data.vg.json'
import Chart from './Chart'

import customGraph from './assets/custommap.vg.json'
import homework9 from "./cylcones"
import areaChart from "./assets/areaChart.vg.json"
import barChart from "./assets/stackedBarChart.vg.json"
function App() {

  return (
    <div id="main-content"> 
      <h1 className='lora-font'>Australia's Ravaged States</h1>
      <p className='text' style={{fontWeight:500, textAlign:'center'}}>
        
        From the <span className='bushfire'>bushfires</span>, <span className='cyclone'>cylcones</span> and <span className='storm'>storms</span>, Australia recieves its fair share of natural disasters.
      </p>
      <div className='row'>
        <Chart spec={barChart}/>
        <div className='col'>
          <p className='text'>
            The most expensive state to live in is Queensland primarily due to the <span className='cyclone'>cyclones</span> and the resulting <span className='flood'>flood waters</span>.
          </p>
          <p className='text'>
            Northern territory has a similar spread to Queensland but is missing <span className='cyclone'>cylcone</span> Tracy in 1974, which had completely destroyed Darwin costing over 5 billion AUD.
          </p>
          <p className='text'>
            The southern and western states are comparatively much cheaper. Victoria and South Australia have experienced terrible <span className='bushfire'>bushfires</span>, but they have predominantly affected rural areas, lessing their affects compared to coastal <span className='cyclone'>cyclone</span> hot spots.
          </p>
          <p className='text'>
            Each state receives damaging <span className='storm'>storms</span>, but they generally don't reach the damaging levels of <span className='bushfire'>bushfires</span> and <span className='cyclone'>cyclones</span>.
          </p>
          
        </div>

      </div>
      <div className='row'>
        <div className='col'>
          <p className='text'>
            Historically <b>Victoria</b> has recieved the worst <span className='bushfire'>bushfires</span>.
            Ash Wednesday in 1983 burnt a large portion of <b>South Australia</b>.
          </p>
          <p className='text'>
            In 2019-2020 brought the worst <span className='bushfire'>bushfire</span> season that Australia has seen, with <b>18.7</b> million hectares <span className='bushfire'>burnt</span>, <b>2,779</b> homes lost and <b>34</b> fatalities, in a mere 8 months across all states and territories.
          </p>
          <p className='text'>
            In contrast the northern states of Queensland and Northern Territory suffer the most from <span className='cyclone'>cyclones</span> with particular hard hitters being <b>Yasi</b> in <b>Cairns</b> and <b>Tracy</b> in <b>Darwin</b>.
          </p>
        </div>
        <Chart spec={homework9}/>
      </div>
      <div className='row'>
        <Chart spec={areaChart}/>
        <div className='col'>
          <p className='text'>
            The area of Australia <span className='bushfire'>burnt</span> in <span className='bushfire'>bushfires</span> each decade is growing at an alarming rate since <b>1960</b>.
            The amount of carbon dioxide released by <span className='bushfire'>bushfires</span> since 2019 is now no longer thought to be reabsorbed by forest regrowth.
          </p>
          <p className='text'>
            Spikes early in the graph correspond to specific events such as Black Friday in 1939, or Ash Wednesday in 1983.
          </p>
          <div className='sources'>
            <p className='text' style={{fontSize:'inherit'}}>
              Author: Sean Silva. 
              <br/>
              Sources: 
              <a href="https://www.bom.gov.au/cyclone/tropical-cyclone-knowledge-centre/databases/"> Bom</a>,
              <a href='https://www.bom.gov.au/cyclone/tropical-cyclone-knowledge-centre/history/tracks/'> BOM</a>,
              <a href="https://www.australiangeographic.com.au/science-environment/2016/02/australias-most-destructive-cyclones-a-timeline/"> Australian Geographic</a>,
              <a href='https://insurancecouncil.com.au/wp-content/uploads/2022/06/ICA-Historical-Catastrophe-List-June-2022.xlsx'> Insurance council</a>,
              <a href="https://digital.atlas.gov.au/datasets/historical-bushfire-boundaries-version-2-0/about"> Digital Atals of Australia</a>,
              <a href="https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2025"> ABS</a>
              <br />
              Retrieved: 2025/24/09 - 2025/10/15
            </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
