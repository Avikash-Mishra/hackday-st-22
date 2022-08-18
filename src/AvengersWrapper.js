import React from "react";
import CardGrid from "./CardGrid";
export default function AvengersWrapper({ avenger }) {
  // const cells = avengers.characters.map((obj, i) => (
  //   <Card className="item" card={obj} />
  // ));

  return (
    <>
      <div className="sub-title">
        {avenger.title} {avenger.date}
      </div>
      <CardGrid cards={avenger.characters} />
    </>
  );
}
