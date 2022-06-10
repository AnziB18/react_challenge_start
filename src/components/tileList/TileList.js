import React from "react";

export const TileList = (props) => {
  return (
    <div>
           <ul>
           {props.info.map((element, index) => (
                <li key={`key: ${index}`}>
                    {(Object.keys(element))}: {Object.values(element)}
                </li>
              ))}
          </ul> 
    </div>
  );
};
