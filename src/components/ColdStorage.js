import React, {useEffect, useContext, useState} from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList";
import { HostsContext } from "./HostsContext";

function ColdStorage() {
  const {hosts, setHosts} = useContext(HostsContext);
  const coldHosts = hosts.filter(h => !h.active);

  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList hosts={coldHosts} />
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
