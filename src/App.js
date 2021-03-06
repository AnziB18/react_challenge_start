import React,{useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {  // stateful component, maintains appointments & contacts
  // Define state variables for contacts & appointments - they're array's of objects
  const [contacts, setContacts] = useState([]); // initialized with raw informations about contancts
  const [appointments, setAppointments] = useState([]); // initialized with raw informations about appointsments

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
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
          <AppointmentsPage allAppointments={appointments} 
                              onAppointmentAdd={addAppointments} 
                              allContactInfo ={contacts}
                              /> {/* Add props & cb func to AppointmentsPage */}

          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
