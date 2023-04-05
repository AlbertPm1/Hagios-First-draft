import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import SponsorForm from './SponsorForm';

function RegistrationPage() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(true);

  return (
    <div className="RegistrationPage">
      <h1>Event Name</h1>
      <button onClick={() => setShowRegistrationForm(true)}>Atendee</button>
      <button onClick={() => setShowRegistrationForm(false)}>Minister</button>
      {showRegistrationForm ? <RegistrationForm /> : <SponsorForm />}
      <footer>
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://www.youtube.com/">Youtube</a>
        <a href="https://t.me/">Telegram</a>
        <a href="https://www.instagram.com/">Instagram</a>
      </footer>
    </div>
  );
}

export default RegistrationPage;
