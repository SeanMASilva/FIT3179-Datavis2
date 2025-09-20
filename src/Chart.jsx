import { useEffect } from "react";
import embed from "vega-embed";
import { hash } from "vega-lite";

function Chart({spec, style}) {
  const id = "vega-" +  hash(spec)
  useEffect(() => {
    embed("#" + id, spec)
  })
  return <div id={id} style={style}></div>
}

export default Chart