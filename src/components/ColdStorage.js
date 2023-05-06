import React, {useEffect, useState} from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList";

function ColdStorage() {
  const [hosts, setHosts] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:3001/hosts?active=false')
    .then(r=> r.json())
    .then(hosts => setHosts(hosts));
  },[]);

  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList hosts={hosts} />
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
