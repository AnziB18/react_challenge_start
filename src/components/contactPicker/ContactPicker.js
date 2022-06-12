import React from "react";

export const ContactPicker = (props) => {
  const currentContacts = Array.from(props.arrayOfContacts);
  let flatArray = currentContacts.flat();
   let lastArray = [];
   let filterArray=flatArray.filter(({Firstname}) => {
          return Firstname
      }) 
    for(let i=0; i<=filterArray.length-1; i++){
      console.log(filterArray[i].Firstname);
      lastArray.push((filterArray[i].Firstname));
      console.log(lastArray)
    }
  const listItem = lastArray.map((item, key) => <option value={props.currentContact} key={key}>{item}</option> )
  return (
       <select onChange={props.onChange}>
            <option defaultValue="" selected='selected'>--Please choose an option--</option>
            {listItem}
      </select>
  );
};