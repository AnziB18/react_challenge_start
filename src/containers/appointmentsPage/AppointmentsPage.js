import React,{ useState }  from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm.js"
import { TileList } from "../../components/tileList/TileList";


export const AppointmentsPage = (props) => {
    /* Define state variables for appointment info */
    const [currentTitle, setCurrentTitle] = useState('');
    const [contact, setContact] = useState([]);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
  
    const contactInfoName = props.allContactInfo;
    const appointments = props.allAppointments;
    const addAppointments = props.onAppointmentAdd;
    
    //reset func for reset Inputs
    const resetInput = () => {
      setCurrentTitle('');
      //setContact('');
      setDate('');
      setTime('');
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
