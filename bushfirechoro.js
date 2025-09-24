import fs from "fs"

const data = fs.readFileSync("./src/assets/bushfiresraw.csv", "utf-8").split("\n").map(s => s.split(","))
const filteredData = data.slice(1).filter(
  row => row[6] === "Bushfire" && row[9] > 9
)
const mergeRow = (row, obj) => {
  const decade = ((row[3].split("/")[0] / 10) | 0) * 10
  return ({
    count: {...obj.count, [decade]:(obj.count[decade] || 0) + 1},
    area_ha: {...obj.area_ha, [decade]: (obj.area_ha[decade] || 0) + +row[9]},
    total_ha: obj.total_ha
  })
}
const objs = filteredData.reduce((obj, row) => ({...obj, [row[11]]:mergeRow(row, obj[row[11]])}), {
  "ACT (Australian Capital Territory)" : {count:{}, area_ha:{},total_ha:235800},
  "NSW (New South Wales)" : {count:{}, area_ha:{}, total_ha:80115000},
  "QLD (Queensland)" : {count:{}, area_ha:{},total_ha:172974200},
  "SA (South Australia)" : {count:{}, area_ha:{},total_ha:98432100},
  "TAS (Tasmania)" : {count:{}, area_ha:{},total_ha:6840100},
  "VIC (Victoria)" : {count:{}, area_ha:{},total_ha:22744400},
  "WA (Western Australia)" : {count:{}, area_ha:{},total_ha:252701300},
})
const newCsv = "State,Decade,Fires,HectaresBurnt,PercentBurnt\n" + Object.entries(objs).map(
  ([state, obj1]) => Object.keys(obj1.count).map(
    decade => [state.split(" ").slice(1).join(" ").slice(1, -1),decade,obj1.count[decade],obj1.area_ha[decade],(obj1.area_ha[decade]/obj1.total_ha).toFixed(4)].join(",")
  ).join("\n")
).join("\n")
// console.log(objs)
fs.writeFileSync("./src/assets/bushfireChoropleth.csv", newCsv)