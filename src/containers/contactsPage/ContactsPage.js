import React, { useState, useEffect } from "react";

export const ContactsPage = (props) => { // stateful component, maintains adding contacts & listing current contacts
  // Define state variables for contact info and duplicate check
  const [contactInfo, setContactInfo] = useState([{contactName: ''}, {phone: 0}, {email: ''}]);
  const contactInfoName = props.contactName; // recieve from app.js for duplicate check
  const onContactsAdd = props.onContactsAdd; // recieve from app.js for duplicate check
  let handleSuccess;
  const handleSubmit = (e) => {
    e.preventDefault();
    //* Add contact info and clear data if the contact name is not a duplicate
    let submitName = e.target.value ;
   if(submitName  !== contactInfoName){
      handleSuccess = setContactInfo(onContactsAdd);
      return handleSuccess;
   } else {
     return submitName = '';
   }
  };
  //* Using hooks, check for contact name in the contacts array variable in props
  useEffect((e) => {
    handleSuccess ? e.target.value = '' : console.log('Something went wrong');
  }, [handleSuccess]);
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
/*this is a initial commit*/