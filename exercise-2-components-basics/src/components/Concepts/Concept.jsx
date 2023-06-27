import React from "react";
import Card from "../Card/Card";

function Concept({description, title, image}) {

  return (
    <Card>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </Card>
  );
}

export default Concept;
