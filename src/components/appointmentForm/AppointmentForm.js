import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

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
              value={props.addCurrentTitle} 
              onChange={({target}) => props.addsetCurrentTitle(target.value)}
              name='title'
              />
      <input  type='date' 
              placeholder="Enter new Date" 
              value={props.addDate} 
              onChange={({target}) => props.addsetDate(target.value)}
              name='date'
              min={"2022-01-01"}
              />
      <input  type='time' 
              placeholder="Enter new Time" 
              value={props.addTime}
              onChange={({target}) => props.addsetTime(target.value)}
              name='time'
              />
      <ContactPicker  arrayOfContacts={props.arrayOfContacts}
                      onChange={({target}) => props.addsetContact(target.value)}
                      />
      <input type="submit" value="Submit" />
    </form>
  </div>

  );
};
