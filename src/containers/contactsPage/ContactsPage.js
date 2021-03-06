import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => { // stateful component, maintains adding contacts & listing current contacts
  // Define 4 state variables for contact infos & duplicate check
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(true)

  let contactInfoName = props.allContactInfo; // recieve from app.js for duplicate check
  const onContactsAdd = props.onContactsAdd; // recieve from app.js for duplicate check

    // extract Informations from contactInfos from app.js
    let extractFirstArray  = contactInfoName.map((element) => {
      return element.filter(({Firstname}) => {
         return Firstname}
         );
      }
    )
  let flatFirstArray = extractFirstArray.flat();
  let extractSecondArray = flatFirstArray.map(element => element.Firstname)

    // useEffect func for checking of dublicate names
    useEffect(() => {
      extractSecondArray.includes(firstName) ? setDuplicateName(false) : setDuplicateName(true); 
      return () => console.log('removed');
     }, [extractSecondArray, firstName])

    //resetInput func
    const resetInput = () => {
      setFirstName('');
      setPhone('');
      setEmail('');
  }
  // handleSubmit with alerts for different cases, after successful handle, resetInput() is called
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
      {/*Add props & cb func to ContactsPage */}  
      <h2>Add Contact</h2>                                                          
        <ContactForm  addFirstname={firstName}
                      addPhone={phone}
                      addEmail={email}
                      setFirstname={setFirstName}
                      setPhone={setPhone}
                      setEmail={setEmail}
                      onSubmit={handleSubmit}
                        /> 
    </section>
    <hr />
    <section>
      <h2>Contacts</h2>   
      <TileList info={props.allContactInfo}/>
    </section>
  </div>

  );
};