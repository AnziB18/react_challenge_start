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
  // let extractFirstArray  = contactInfoName.map((element) => {
  //   return element.filter(({Firstname}) => {
  //     return Firstname}
  //     );
  //   }
  // )
  // let flatFirstArray = extractFirstArray.flat();
  // let extractSecondArray = flatFirstArray.map(element => element.Firstname)
  // console.log(extractSecondArray, flatFirstArray);
  //setContact();
  // useEffect(() => {
  //   setContact(extractSecondArray)
  // },[])
    // useEffect(() => {
    //   setContact(flatFirstArray)
    // },[])
    //  useEffect(() => {
    //   setContact(contactInfoName)
    // },[])
  //  useEffect(() => { does not work
  //   // eslint-disable-next-line no-undef
  //   setContact(Firstname)
  // },[])
  const resetInput = () => {
    setCurrentTitle('');
    //setContact('');
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
                          onSubmit={handleSubmit}
                          arrayOfContacts={contactInfoName}
                          />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {/* {appointments !== [] &&} */}
        <TileList info={appointments}     
                  />
      </section>
    </div>
  );
};
