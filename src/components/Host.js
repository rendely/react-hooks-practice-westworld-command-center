import React, {useContext} from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";
import { SelectedContext } from "./SelectedContext";

function Host({host}) {
  const {selectedId, setSelectedId} = useContext(SelectedContext);
  return (
    <Card
      className={`host + ${ host.id === selectedId ? 'selected' : null }`}
      onClick={()=> setSelectedId(host.id === selectedId ? null : host.id)}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
