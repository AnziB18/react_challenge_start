import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
           {props.info.map((object, index) => (
                <Tile key={`tileKey: ${index}`}
                       //titlename={(Object.keys(object))} 
                       //titlevalue={Object.values(object)}
                        titleValue={object}
                />
              ))}
    </div>
  );
};
