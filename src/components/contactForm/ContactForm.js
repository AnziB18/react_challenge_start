import React from "react";
/*  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit  return (
    ContactForm
  );*/

  export const ContactForm = (props) => {
    return (
      <div>
        <form onSubmit={props.onSubmit}>
          <input  type='text' 
                  placeholder="Enter new name" 
                  value={props.addFirstname} 
                  onChange={({target}) => props.setFirstname(target.value)}
                  name='Firstname'
                  //id="name"
                  ></input>
          <input  type='tel' 
                  placeholder="Enter new phone number" 
                  value={props.addPhone} 
                  onChange={({target}) => props.setPhone(target.value)}
                  name='Phone'
                  //id="phone"
                  ></input>
          <input  type='mail' 
                  placeholder="Enter new Email" 
                  value={props.addEmail}
                  onChange={({target}) => props.setEmail(target.value)}
                  name='mail'
                  //id="mail"
                  ></input>
          <input type="submit" value="Submit" />
          {/* <button >Submit</button> */}
        </form>
        {/* <p>{`${props.addContactInfo[0][0]}`}</p> */}
      </div>
    )
  };
  
  
