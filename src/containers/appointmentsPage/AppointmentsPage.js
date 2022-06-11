import React,{ useState }  from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm.js"
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /* Define state variables for appointment info */
  const [currentTitle, setCurrentTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const contactInfoName = props.allContactInfo;
  const appointments = props.appointments;
  const addAppointments = props.onAppointmentAdd;
  const resetInput = () => {
    setCurrentTitle('');
    setContact('');
    setDate('');
    setTime('');
}
  const handleSubmit = (e) => {
    e.preventDefault();/* Add contact info and clear data  */
    addAppointments([{Title: currentTitle}, {ContactPerson: contact}, {Date: date}, {Time: time}]);
    resetInput();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm  addCurrentTitle={currentTitle}
                          addContact={contact}
                          addDate={date}
                          addTime={time}
                          addsetCurrentTitle={setCurrentTitle}
                          addsetContact={setContact}
                          addsetDate={setDate}
                          addsetTime={setTime}
                          onhandleSubmit={handleSubmit}
                          arrayOfContacts={contactInfoName}
                          />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList info={appointments}     
                  />
      </section>
    </div>
  );
};
