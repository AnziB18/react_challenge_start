import React,{useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {  // stateful component, maintains appointments & contacts
  // Define state variables for contacts & appointments - they're array's of objects
  const [contacts, setContacts] = useState([{name: ''}, {phoneNumber: 0}, {email:''}]); // initialized with raw informations about contancts
  const [appointments, setAppointments] = useState([{title: ''}, {contact: ''}, {date: ''}, {time: ''}]); // initialized with raw informations about appointsments

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  //Implement function to add data to contacts and appointments
  const addContacts = (cont) => {
    setContacts(prev => {return [cont, ...prev]})
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
            <ContactsPage const={contacts} onContactsAdd={addContacts}/>{/* Add props & cb func to ContactsPage */}
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
