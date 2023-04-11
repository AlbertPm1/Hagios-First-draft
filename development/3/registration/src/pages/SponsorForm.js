import React, { useState } from 'react';
function SponsorForm() {
    const [title, setTitle] = useState('')
    const [ministryName, setMinistryName] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      // Do something with the form data, like submit it to a server
      console.log({ firstName, lastName, email, phoneNumber });
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="ministryName">Ministry Name:</label>
        <input
          type="text"
          id="ministryName"
          value={ministryName}
          onChange={(e) => setMinistryName(e.target.value)}
          required
        />
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
  
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
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

export default SponsorForm;
