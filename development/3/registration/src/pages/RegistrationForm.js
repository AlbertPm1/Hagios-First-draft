import React, { useState } from 'react';
import "../css/RegistrationForm.css";

function RegistrationForm() {
  const [firstname, setFirstName] = useState('');
  const [secondname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      userdetails: {
        firstname: firstname,
        secondname: secondname,
        email: email,
        phone_number: phoneNumber
      },
      other:{
        
      }
    };

    fetch('http://api.hagiosministriesintl.org/ministry/attendee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Regisration Successful:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        id="firstname"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />

      <label htmlFor="secondname">Last Name:</label>
      <input
        type="text"
        id="secondname"
        value={secondname}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
