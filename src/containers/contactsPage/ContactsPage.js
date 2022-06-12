import React, { useState, useEffect } from "react";
//import { ContactForm } from "../../components/contactForm/ContactForm";
//import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => { // stateful component, maintains adding contacts & listing current contacts
  // Define state variables for contact info and duplicate check
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

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {/* <ContactForm  addContactInfo={contactInfo}
                          onSubmit={handleSubmit}
                          onSetContact={setContactInfo}
                          /> */}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {/* <TileList /> */}
      </section>
    </div>
  );
};

/*this is a initial commit*/