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
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input  type='text' 
                placeholder="Enter new Appointment Title" 
                value={props.addFirstname} 
                onChange={({target}) => props.addsetCurrentTitle(target.value)}
                name='title'
                //id="name"
                />
        <input  type='date' 
                placeholder="Enter new Date" 
                value={props.addPhone} 
                onChange={({target}) => props.addsetDate(target.value)}
                name='date'
                //id="phone"
                />
        <input  type='time' 
                placeholder="Enter new Time" 
                value={props.addEmail}
                onChange={({target}) => props.addsetTime(target.value)}
                name='time'
                //id="mail"
                />
        <input  type='text' 
                placeholder="Pick a Contact" 
                //value={props.addEmail}
                //onChange={({target}) => props.addsetTime(target.value)}
                //name='time'
                //id="mail"
                />
        <input type="submit" value="Submit" />
        {/* <button >Submit</button> */}
      </form>
    </div>
  );
};
