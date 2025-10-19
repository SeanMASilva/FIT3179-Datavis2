import embed from "vega-embed";
import { hash } from "vega-lite";

function Chart({spec, style}) {
  const id = "vega-" +  hash(spec)
  embed("#" + id, spec)
  return <div id={id} style={style} className="chart"></div>
}

export default Chart