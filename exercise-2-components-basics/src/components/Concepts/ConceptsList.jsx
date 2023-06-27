import React from "react";
import Concept from "./Concept";

function ConceptsList({ concepts }) {
  return (
    <ul id="concepts">
      {concepts.map((concept, index) => (
        <Concept {...concept} key={index} />
      ))}
    </ul>
  );
}

export default ConceptsList;
