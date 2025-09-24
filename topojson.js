
// import data from "./src/assets/bushfires."
import fs from "fs"
import { type } from "os"
import { exit } from "process"

const data = JSON.parse(fs.readFileSync("./src/assets/bushfires.json", 'utf-8'))
// console.log(data)

const bushfires = new Set(fs.readFileSync("./src/assets/bushfiresfiltered.csv", "utf-8").split("\r\n").map(s => +s.split(",")[0]).slice(1))
// console.log(bushfires)
const bushFireObjects = data.objects['Historical_Bushfire_Boundaries_–_Version_2.0']
const bushfireGeometries = bushFireObjects.geometries.filter(obj => bushfires.has(obj.properties.OBJECTID)).filter(obj => obj.arcs)
const rawArcs = bushfireGeometries.flatMap(obj => obj.type === 'Polygon' ? obj.arcs : obj.arcs.flatMap( x => x) ).flatMap(x => x)
const posArcs = new Set(rawArcs.map(id => id < 0 ? ~id : id))

const filteredArcs = data.arcs.reduce(
  (state, arc, i) => (posArcs.has(i) ? {mapping:[...state.mapping, i], arcs:[...state.arcs, arc]} : state), 
  ({mapping:[], arcs:[]})

)
const arcMapping = Object.fromEntries(filteredArcs.mapping.flatMap((orig, newI) => [[orig, newI], [~orig, ~newI]]))
const newData = {
  ...data,
  arcs:filteredArcs.arcs,
  objects: {
    "bushfires": {
      type:"GeometryCollection",
      geometries: bushfireGeometries.map(
        obj => ({...obj,
          arcs: obj.type === 'Polygon' ?
            [obj.arcs[0].map(arc => arcMapping[arc])]
            :
            obj.arcs.map(arcs => [arcs[0].map(arc => arcMapping[arc])])
        })
      )
    }
  }
}

fs.writeFileSync("./src/assets/bushfiresProcessed.json", JSON.stringify(newData))
