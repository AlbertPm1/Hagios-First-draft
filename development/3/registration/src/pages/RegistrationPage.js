import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import SponsorForm from './SponsorForm';


function RegistrationPage() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(true);

  return (
    <div className="RegistrationPage">
      <div className="event-details">
      <div class="card-image">	
        <h1>Register As a</h1>
      </div>
      <div className="registration-form">
        <button onClick={() => setShowRegistrationForm(true)}>Attendee</button>
        <button onClick={() => setShowRegistrationForm(false)}>Minister</button>
        {showRegistrationForm ? <RegistrationForm /> : <SponsorForm />}
      </div>
      {/* <footer>
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://www.youtube.com/">Youtube</a>
        <a href="https://t.me/">Telegram</a>
        <a href="https://www.instagram.com/">Instagram</a>
      </footer> */}
    </div>
    </div>
  );
}

export default RegistrationPage;
