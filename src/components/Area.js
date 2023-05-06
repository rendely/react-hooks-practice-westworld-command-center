import React, {useEffect, useState} from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList";

function Area({area}) {

  const [hosts, setHosts] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:3001/hosts?active=true&area='+area.name)
    .then(r=> r.json())
    .then(hosts => setHosts(hosts));
  },[]);

  return (
    <div
      className="area"
      id={area.name}
    >
      <h3 className="labels">
        {area.name.replaceAll('_',' ')}
      </h3>
      <HostList hosts={hosts}/>
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
