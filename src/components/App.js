import React from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";
import { SelectedProvider } from "./SelectedContext";

function App() {
  return (
    <SelectedProvider>
    <Segment id="app">
      <WestworldMap />
      <Headquarters />
    </Segment>
    </SelectedProvider>
  );
}

export default App;
