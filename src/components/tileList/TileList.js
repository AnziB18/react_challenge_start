import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
           {props.info.map((element, index) => (
                <Tile key={`tileKey: ${index}`}
                      // titlename={(Object.keys(element))} 
                      // titlevalue={Object.values(element)}
                      titleValue={element}
                />
              ))}
    </div>
  );
};
