import React from "react";
import { Tile } from "../tile/Tile"; 
export const TileList = (props) => {
  return (
    <div>
           {props.info.map((object, key) => (
                <Tile key={`tileKey: ${key}`}
                        titleValue={object}
                />
              ))}
    </div>

  );
};
