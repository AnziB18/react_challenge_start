import React, { useState } from "react";

export const ContactsPage = (props) => { // stateful component, maintains adding contacts & listing current contacts
  // Define state variables for contact info and duplicate check
  const [contactInfo, setContactInfo] = useState([{name: ''}, {phone: 0}, {email: ''}]);
  const allContactInfos = props.allContactInfos;
  const onContactsAdd = props.onContactsAdd; 
  const handleSubmit = (e) => {
    e.preventDefault();
    //* Add contact info and clear data if the contact name is not a duplicate
    
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

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