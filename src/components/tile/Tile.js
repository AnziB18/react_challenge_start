import React from "react";

export const Tile = (props) => {
  let newArr = props.titleValue;
  let firstSlice = newArr.slice(0,1);
  let restSlice = newArr.slice(1)
  // console.log(newArr);
  // console.log(firstSlice);
  // console.log(restSlice)
  // console.log(Object.keys(firstSlice[0]), Object.values(firstSlice[0]));
  let newFirstSlice = <p className="tile-title">{Object.keys(firstSlice[0])}: {Object.values(firstSlice[0])}</p>
  let newRestSlice=restSlice.map((element) => <p className="tile">{`${Object.keys(element)}: ${Object.values(element)}`}</p>)

  //console.log(newRestSlice);
  // let firstObject = props.titleValue.filter(({Firstname}) => Firstname)
  // let firstKey = Object.keys(firstObject[0]);
  // let firstString = firstObject.map(({Firstname}) => Firstname)
  // let deleteFirstArrayItem = props.titleValue.slice(1);
  // let secondString = deleteFirstArrayItem.filter(({phone})=> phone)
  
  // let firstObject = props.titleValue.filter(({Firstname}) => Firstname);
  // let firstKeyOfObject =props.titleValue.map(element => {
  //       return element.filter(({Firstname}) => {
  //         return Firstname;
  //       })
  // });
  
  //let valueObject = props.titlevalue.map(element => element);
  // console.log(Object.keys(firstObject[0]))
  // console.log(firstString)
  // console.log(deleteFirstArrayItem);
  // console.log(secondString);
  //console.log(firstKeyOfObject);
  //let arr1 = []; 
  // arr1.push(Object.keys(props.titleValue));
  // arr1.map(item => arr1.push(item));
  // let arr2 = Object.values(props.titleValue);
  //  = arr1; 
  // console.log(arr1);
  // for (const [key, value] of Object.entries(props.titleValue)) {
  //   console.log(`${key}: ${value}`);
  // }
  //let firstKeyOfObject = Object.keys(props.titleValue);.map((objkeys, index, array) => objkeys).map((element,index) => element);
  //let keyOfObject = Object.keys(props.titleValue);
  // for(let i = 0; i<1;i++){
  // let newKeyOfObject = props.titleValue
  // console.log(newKeyOfObject);
  // }
  //let valuesOfObject = Object.values(props.titleValue)
  //console.log(newKeyOfObject);
  return (
    <div className="tile-container">
      {newFirstSlice}
      {newRestSlice}
        {/* <p>{firstKeyOfObject}</p> : {valuesOfObject}*/}
          {/* <p className="tile-title" >{firstKey}: {firstString}</p> */}
        
        {/* {Object.values(props.titleValue).map((element,index) => 
          <>
            <p className="tile-title" key={`${index}`}>{element}</p>
            {console.log(element)}
            {console.log(element[index])}
            {console.log(index)}
            {/* <p className="tile" key={`Objkey: ${index}`}>{element}</p>
          </>
        )
        } */}
    </div>
  );
};
