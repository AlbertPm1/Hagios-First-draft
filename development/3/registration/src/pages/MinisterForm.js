import React, { useState } from 'react';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';




toastr.options = {
  positionClass: 'toast-top-right', // Example position, you can change it
  timeOut: 3000, // Example timeout, you can change it
};

function MinisterForm() {
  const [title, setTitle] = useState('')
  const [name, setMinistryName] = useState('')
  const [firstname, setFirstName] = useState('');
  const [secondname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      userdetails: {
        firstname: firstname,
        secondname: secondname,
        email: email,
        phone_number: phoneNumber
      },
      other: {

        title: title,
        name: name
      }
    }

    fetch('https://api.hagiosministriesintl.org/ministry/minister', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(' Registration Successful:', data);
        setIsRegistered(true);
        toastr.success('Congratulations! Your registration was successful as an Minister. Kindly check your email for further information', 'Success');
      })
      .catch(error => {
        console.error('Error:', error);
        toastr.error('An error occurred during registration. Please try again.', 'Error');

      });
  }

  return (
    <div>
      {isRegistered ? (
        <p>Thanks for registration! Check out your Email for confirmation</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="name">Ministry Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setMinistryName(e.target.value)}
            required
          />
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
      )}
    </div>
  );
}


export default MinisterForm;
