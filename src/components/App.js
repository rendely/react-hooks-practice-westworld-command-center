import React from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";
import { HostsProvider } from "./HostsContext";

function App() {
  return (
    <HostsProvider>
      <Segment id="app">
        <WestworldMap />
        <Headquarters />
      </Segment>
    </HostsProvider>
  );
}

export default App;
