import React from "react";

export const Tile = (props) => {
  let newArr = props.titleValue;
  let firstSlice = newArr.slice(0,1);
  let restSlice = newArr.slice(1)

  return (
    <div className="tile-container">
      <p className="tile-title" key={`${Object.values(firstSlice[0])}`}>{Object.keys(firstSlice[0])}: {Object.values(firstSlice[0])}</p>
      {restSlice.map((element) => 
      <p className="tile" key={`${Object.values(element)}`}>{`${Object.keys(element)}: ${Object.values(element)}`}</p>)}
    </div>
  );
};
