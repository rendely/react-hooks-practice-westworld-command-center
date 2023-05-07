import React, {useEffect, useContext, useState} from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList";
import { HostsContext } from "./HostsContext";


function Area({area}) {

  const {hosts, setHosts} = useContext(HostsContext);
  const areaHosts = hosts.filter(h => h.active && h.area === area.name);

  return (
    <div
      className="area"
      id={area.name}
    >
      <h3 className="labels">
        {area.name.replaceAll('_',' ')}
      </h3>
      <HostList hosts={areaHosts}/>
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
