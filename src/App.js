import React,{useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {  // stateful component, maintains appointments & contacts
  // Define state variables for contacts & appointments - they're array's of objects
  const [contacts, setContacts] = useState([[{contactName: 'Eva'}, {phoneNumber: '000540'}, {email:'a@v'}],
                                           [{contactName: 'Bernd'}, {phoneNumber: '000220'}, {email:'b@e'}],
                                           [{contactName: 'Chris'}, {phoneNumber: '006660'}, {email:'c@h'}]]); // initialized with raw informations about contancts
  const [appointments, setAppointments] = useState([{title: 'Meet Alex'}, {contact: 'Alex'}, {date: '1.1.2000'}, {time: '13:00'}]); // initialized with raw informations about appointsments

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  //Implement function to add data to contacts and appointments
  const addContacts = (contactInfos) => {
    setContacts(prev => {return [contactInfos, ...prev]})
  }
  //Implement function to add data to contacts
  const addAppointments = (appointment) => {
    setAppointments(prev => {return [appointment, ...prev]})
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}> 
            <ContactsPage allContactInfo ={contacts}
                          onContactsAdd={addContacts} 
                          />
            {/*{contacts.map((contactInfo, index) =>(
            <ContactsPage contactName={contactInfo.name}
                          key={`key: ${index}`}
                          phoneNumber={contactInfo.phoneNumber}
                          email={contactInfo.email}
                          onContactsAdd={addContacts}/>))}  Add props & cb func to ContactsPage */}
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointment={appointments} onAppointmentAdd={addAppointments} /> {/* Add props & cb func to AppointmentsPage */}
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
