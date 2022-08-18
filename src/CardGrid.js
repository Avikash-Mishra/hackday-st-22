import React from "react";
import CardCopy from "./CardCopy";
export default function CardGrid({ cards }) {
  const cells = cards.map((obj, i) => <CardCopy card={obj} index={i} />);

  return <div className="collection">{cells}</div>;
}
