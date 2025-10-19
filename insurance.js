import fs from "fs"

const csv = fs.readFileSync("./src/assets/InsuranceRaw.csv", "utf-8")
const [header, ...lines] = csv.split("\n")
const newLines = lines.flatMap(line => 
  {
    const fields = line.split(",")
    const numStates = fields.at(-1).split(" ").length
    const notState = fields.slice(0, -1).map((v, i) => i === 2 ? Math.round(v / numStates) : v)

    return fields.at(-1).split(" ").map(state => [...notState, state].join(","))
  }
)
console.log([header, ...newLines].join("\n"))