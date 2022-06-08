import React, { useState, useEffect } from "react";
//import { ContactForm } from "../../components/contactForm/ContactForm";
//import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => { // stateful component, maintains adding contacts & listing current contacts
  // Define state variables for contact info and duplicate check
  const [contactInfo, setContactInfo] = useState([{contactName: ''}, {phone: 0}, {email: ''}]);
  let contactInfoName = props.allContactInfo; // recieve from app.js for duplicate check
  const onContactsAdd = props.onContactsAdd; // recieve from app.js for duplicate check
  useEffect(() => {
    const checked = contactInfo.includes('Christian');
    if(checked) {
      console.log('Peter')
    }else {
      setContactInfo([{contactName: 'Christian'}, {phone: '002220'}, {email: 'c@hr'}])
      console.log(contactInfo)
      const handleSubmit = (e) => {
        e.preventDefault();
        //setContactInfo(e.target.value);
      }
    };
    return () => {console.log('removed')}
  }, [contactInfo])
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