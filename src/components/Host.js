import React, {useContext} from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";
import { SelectedContext } from "./SelectedContext";

function Host({host}) {
  const {selectedId, setSelectedId} = useContext(SelectedContext);
  return (
    <Card
      className={`host + ${ host.id === selectedId ? 'selected' : null }`}
      onClick={/* On Click what? */ null}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
