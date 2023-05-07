import React, { useState, useContext } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";
import { HostsContext } from "./HostsContext";


function HostInfo() {
  const {selectedId, setSelectedId, hosts, setHosts} = useContext(HostsContext);
  const [options] = useState([
    { key: "some_area", text: "Some Area", value: "some_area" },
    { key: "another_area", text: "Another Area", value: "another_area" },
  ]);

  const [value] = useState("some_area");
  const [thisHost] = hosts.filter(h => h.id === selectedId);

  function handleOptionChange(e, { value }) {
    console.log(value);
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  function handleRadioChange() {
    console.log("The radio button fired", selectedId);
    fetch('http://localhost:3001/hosts/'+selectedId,{
      method: "PATCH",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({active: !thisHost.active})
    })
     .then(r => r.json())
     .then(updatedHost => setHosts(hosts => hosts.map(h => h.id === updatedHost.id ? updatedHost : h)))
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={thisHost.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {thisHost.firstName} | {thisHost.gender === 'Male' ? <Icon name="man" /> : <Icon name="woman" />}
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={"Active"}
                checked={thisHost.active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={value}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
