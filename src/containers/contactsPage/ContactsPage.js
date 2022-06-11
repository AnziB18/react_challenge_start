import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

//let forChecking = [];
export const ContactsPage = (props) => { // stateful component, maintains adding contacts & listing current contacts
  // Define state variables for contact info and duplicate check
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(true)
  const contactInfoName = props.allContactInfo; // recieve from app.js for duplicate check
  const onContactsAdd = props.onContactsAdd; // recieve from app.js for duplicate 

  // extract Informations from contactInfos from app.js
  let extractFirstArray  = contactInfoName.map((element) => {
    return element.filter(({Firstname}) => {
       return Firstname}
       );
    }
  )
let flatFirstArray = extractFirstArray.flat();
  let extractSecondArray = flatFirstArray.map(element => element.Firstname)
  //console.log(extractSecondArray);

    useEffect(() => {
  // for(let i = 0; i < contactInfoName.lenght ; i++){
  //    infoSt.push(contactInfoName[i][0].Firstname);
  //    return infoSt;
  //   } console.log(infoSt);
      //let infoSt = contactInfoName.map((element) => element); // 
      //      return element.filter(({Firstname}) => {
       //return Firstname}  infoSt.map((element) =>  {return newArr.push(element)});
     
      // console.log(infoSt[0].Firstname)
      // let newArr = '';
      // infoSt.filter((arr,i) => {
      //     if(arr[i].Firstname){
      //       return newArr = arr[i];
      //     } return console.log(newArr);
      //   } 
      //   )
      //console.log(newArr);      
      //  let infoSt;
      //   infoSt = contactInfoName.map((element) => {
      //     return element.filter(({Firstname}) => {
      //        return Firstname}
      //        );
      //     }
      //   )
      // let newArr = infoSt.flat();
       
      // // let newArr = [];
      //   let nextnewArr = newArr.map(element => element.Firstname)
      //   console.log(nextnewArr);
      // console.log(newArr);
      //console.log(extractFirstArray)
      //console.log(extractSecondArray);
      extractSecondArray.includes(firstName) ? setDuplicateName(false) : setDuplicateName(true); 
      //return () => console.log('removed');
     }, [extractSecondArray, firstName])
    const resetInput = () => {
        setFirstName('');
        setPhone('');
        setEmail('');
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
        //console.log(duplicateName);
        if(duplicateName){
        onContactsAdd([{Firstname: firstName}, {Phone: phone}, {Email: email}]);
        resetInput();
        }
        else if(firstName === '') {
          alert('You have not enter name')
        } 
        else {alert('Name is already used')
          resetInput();
        }        
      }  
  return (
    <div>
      <section>
        <h2>Add Contact</h2>                                                                 
          <ContactForm  addFirstname={firstName}
                        addPhone={phone}
                        addEmail={email}
                        setFirstname={setFirstName}
                        setPhone={setPhone}
                        setEmail={setEmail}
                        onSubmit={handleSubmit}
                          /> {/*Add props & cb func to ContactsPage  {props.allContactInfo.forEach((item, i) =>  TileList key={`key: ${index+3151})`}*/}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>   
        <TileList info={props.allContactInfo}/>
        {/* {props.allContactInfo.map((element, index) => (
                <TileList key={`key: ${index}`}
                          info={element}
                />
        ))} */}
          
      </section>
    </div>
  );
};


/*this is a initial commit*/