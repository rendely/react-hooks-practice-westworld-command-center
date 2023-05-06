import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap() {
  const [areas, setAreas] = useState([]);

  useEffect(() => fetch('http://localhost:3001/areas')
  .then(r => r.json())
  .then(areas => setAreas(areas))
  ,[]);

  console.log(areas);
  return <Segment id="map">{areas.map(area => <Area key={area.id} area={area}/>)}</Segment>;
}

export default WestworldMap;
