import React from "react";

export const ContactForm = (props) => {
  return (
    <div>
    <form onSubmit={props.onSubmit}>
      <input  type='text' 
              placeholder="Enter new name" 
              value={props.addFirstname} 
              onChange={({target}) => props.setFirstname(target.value)}
              name='Firstname'
              />
      <input  type='tel' 
              placeholder="Enter new phone number" 
              value={props.addPhone} 
              onChange={({target}) => props.setPhone(target.value)}
              name='Phone'
              />
      <input  type='mail' 
              placeholder="Enter new Email" 
              value={props.addEmail}
              onChange={({target}) => props.setEmail(target.value)}
              name='mail'
              />
      <input type="submit" value="Submit" />
    </form>
  </div>

  )
}
