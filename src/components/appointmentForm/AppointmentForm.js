import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

/*    contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit */

export const AppointmentForm = (props) => {
  // const getTodayString = () => {
  //   const [month, day, year] = new Date()
  //     .toLocaleDateString("en-US")
  //     .split("/");
  //   return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  // };

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input  type='text' 
                placeholder="Enter new Appointment Title" 
                value={props.addCurrentTitle} 
                onChange={({target}) => props.addsetCurrentTitle(target.value)}
                name='title'
                //id="name"
                />
        <input  type='date' 
                placeholder="Enter new Date" 
                value={props.addDate} 
                onChange={({target}) => props.addsetDate(target.value)}
                name='date'
                min={"2022-01-01"}
                //id="phone"
                />
        <input  type='time' 
                placeholder="Enter new Time" 
                value={props.addTime}
                onChange={({target}) => props.addsetTime(target.value)}
                name='time'
                //id="mail"
                />
        <ContactPicker  //currentContact={props.addContact}
                        arrayOfContacts={props.arrayOfContacts}
                        onChange={({target}) => props.addsetContact(target.value)}
                        />
          {/* { props.addContact.map((object, key) => (
          <ContactPicker  currentContact={object}
                          key={key}
                          onChange={({target}) => props.addsetContact(target.value)}
                        />
        ) 
        )}  */}
        {/* <input  type='text' 
                placeholder="Pick a Contact" 
                value={props.addContact}
                onChange={({target}) => props.addsetContact(target.value)}
                //name='time'
                //id="mail"
                /> */}
                
        <input type="submit" value="Submit" />
        {/* <button >Submit</button> */}
      </form>
    <div>
    {/* <ContactPicker arrayOfContacts={props.arrayOfContacts}/> this is not visible for ContactPicker.js!! */}
    </div>
    </div>
  );
};
