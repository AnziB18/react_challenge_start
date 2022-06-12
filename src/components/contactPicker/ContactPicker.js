import React from "react";
//import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm.js"
//selected="selected"
export const ContactPicker = (props) => {
  const currentContacts = Array.from(props.arrayOfContacts);
  //const currentContacts = Array.from(props.currentContact)
  //const currentContacts = Array.from(props.info)
  //let  firstSlice = currentContacts.slice(0,1);
  console.log(currentContacts)
  //let forEachArray = Object.keys(currentContacts).map((item, key) => <option value={item} key={key}>{item}</option>)
  ;
   let forEachArray2 = currentContacts.flat();
   let nextArray = [];
  //  currentContacts.map(item => {
  //    return forEachArray2.push(item);
  //  })
   console.log(forEachArray2);
   let forEachArray=forEachArray2.filter(({Firstname}) => {
          return Firstname
      }) 
    for(let i=0; i<=forEachArray.length-1; i++){
      console.log(forEachArray[i].Firstname);
      nextArray.push((forEachArray[i].Firstname));
      console.log(nextArray)
    }
  const listItem = nextArray.map((item, key) => <option value={props.currentContact} key={key}>{item}</option> )
  // let forEachArray3 = Object.values(forEachArray2);
  //;
    //const flatArray = currentContacts.flat();
  //console.log(flatArray);
   //flatArray.forEach((item) => forEachArray = item) 
   //currentContacts.map((item) => forEachArray = item) 
   //console.log(forEachArray);
  // let newFirstSlice = <p className="tile-title" key={`${Object.values(firstSlice[0])}`}>{Object.keys(firstSlice[0])}: {Object.values(firstSlice[0])}</p>
  // let newFirstSlice = (Object.values(firstSlice[0]));
  // console.log(newFirstSlice)
   //let newSecondSlice = Object.keys(firstSlice[0])
   //console.log(newSecondSlice)
  //  flatArray.filter(({Firstname}) => {
  //      return forEachArray.push(Firstname)
  //  }) 
  //    console.log(forEachArray);  
//   function filterItems(arr, query) {
//   return arr.filter(function(el) {
//     return el.indexOf(query) !== -1
//   })
// }
//   console.log(filterItems(flatArray,'Firstname'));
  // const newArr = () => {
  //   for (const [property, i] in currentContacts) {
  //     for(const item in property[i])
  //       return property[item];
  //  }
  // }
  // console.log(newArr())
  //let newArr = currentContacts.map(element => element)
  //const test = Object.values(currentContacts)
  //const test = currentContacts.values()flatArray[0].Firstname)
  //const test = flatArray[0].Firstname
  // const lookOfThis2 = typeof flatArray[0];
  // console.log(lookOfThis2);
  // const lookOfThis = typeof flatArray;
  // console.log(lookOfThis);
  //let newArr = currentContacts.map(element => element)
  //console.log(newArr)
  //const allContactInfo = props.titleValue.map(element => element);
  //console.log(allContactInfo);
  // let newArr  = arrayOfContacts.map((element, key) => 
  //   <p>{Object.keys(element)}</p> )
  
//newArr.values().map((element, key) => console.log(element));
  //    const newArr = currentContacts.map((element) => { //it doesn't work, because currentContacts is not a function
  //       return element.map((item, keys) => {
  //         return item[keys]
  //       })
  //   })
  // console.log(newArr);{newFirstSlice}{Object.keys(currentContacts).map((element, key) =>
  return (
    // firstSlice !== [] &&
    //   <select defaultValue="" selected='selected'>
    //         <option >--Please choose an option--</option>
    //         <option value={`${Object.values(firstSlice[0])}`}>{Object.values(firstSlice[0])}</option>
        
    //   </select>
       <select onChange={props.onChange}>
            <option defaultValue="" selected='selected'>--Please choose an option--</option>
            {listItem}
            {/* {forEachArray3} */}
            {/* <option value={`${Object.values(firstSlice[0])}`}>{Object.values(firstSlice[0])}</option> */}
      </select>
  );
};
