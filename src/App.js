import React,{useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {  // stateful component, maintains appointments & contacts
  // Define state variables for contacts & appointments 
  const [contacts, setContacts] = useState([]); // add start, initialize with empty Array
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  //Implement function to add data to contacts and appointments
  const addContacts = (contact) => {
    setContacts(prev => {return [contact, ...prev]})
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
             {/* Add props to ContactsPage */}
            <ContactsPage />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
