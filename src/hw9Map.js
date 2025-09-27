import vgspecBase from "./assets/homework9.vg.json"

const cyclone = (file) => {
  return ({
      "data": {
        "url": "https://raw.githubusercontent.com/SeanMASilva/FIT3179-Datavis2/refs/heads/main/src/assets/" + file
      },
      "mark": {"type": "trail", "fill":"white", "stroke":"lightgreen", "strokeOpacity":0.5},
      "transform": [
        {"filter": "datum.lat"},
        {"filter": "datum.year >= decade & datum.year < (decade + 10)"}
      ],
      "encoding": {
        "latitude": {"field":"lat", "type": "quantitative"},
        "longitude": {"field":"lon", "type": "quantitative"},
        "order": {"field":"datetime", "type": "temporal"},
        "size": {
          "field":"pressure", 
          "type": "quantitative", 
          "scale": {
            "domain":[1010, 900]
          },
          legend:{"title": "Eye pressure (kpa)"},
        },
        "tooltip": [
          {"field":"name", title:"Cylcone Name"},
          {field: "year", title:"Year"},
          {field:"pressure", title:"Eye pressure (kpa)"}
        ]
      }
    })
}

const hurricaneCsvs = "1971-ALTHEA.csv,1971-EMILY.csv,1974-TRACY.csv,1975-JOAN.csv,1977-ALBY.csv,1985-WINIFRED.csv,1988-ORSON.csv,1994-BOBBY.csv,1996-JUSTIN.csv,2004-INGRID.csv,2005-LARRY.csv,2005-MONICA.csv,2006-GEORGE.csv,2010-YASI.csv,2014-MARCIA.csv".split(',')

const specWithHurricanes = {...vgspecBase, layer:[...vgspecBase.layer, ...hurricaneCsvs.map(cyclone)]}

const vgspec = specWithHurricanes

export default vgspec
