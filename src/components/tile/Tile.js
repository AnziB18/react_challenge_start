import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
        {Object.values(props.titleValue).map((element,index) => 
          <>
            <p className="tile-title" key={`Objkey: ${index}`}>{element[0]}</p>
            <p className="tile" key={`Objkey: ${index}`}>{element}</p>
          </>
        )
        }
    </div>
  );
};
