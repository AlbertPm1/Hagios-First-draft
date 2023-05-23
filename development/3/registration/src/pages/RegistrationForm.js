import React, { useState } from 'react';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

import "../css/RegistrationForm.css";

toastr.options = {
  positionClass: 'toast-top-right', // Example position, you can change it
  timeOut: 3000, // Example timeout, you can change it
};
function RegistrationForm() {
  const [firstname, setFirstName] = useState('');
  const [secondname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // New state variable
  function handleSubmit(event) {
    event.preventDefault();
    if (isRegistered) {
      toastr.warning('You have already registered.', 'Warning');
      return;
    }
    const formData = {
      userdetails: {
        firstname: firstname,
        secondname: secondname,
        email: email,
        phone_number: phoneNumber
      },
      other: {
        // Other form data, if any
      }
    };
    fetch('https://api.hagiosministriesintl.org/ministry/attendee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        resetForm();
        setIsRegistered(true);
        toastr.success('Congratulations! Your registration was successful as an Attendee. Kindly check your email for further information', 'Success');
        // alert("Congratulations! Your registration was successful as an Attendee. Kindly check your email for further information") // Call resetForm after successful registration
      })
      .catch((error) => {
        console.error('Error:', error);
        toastr.error('An error occurred during registration. Please try again.', 'Error');
      });
  }
  function resetForm() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
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
      <button type="submit" disabled={isRegistered}>
        {isRegistered ? "Registered" : "Register"}
      </button>
    </form>
  );
}
export default RegistrationForm;