import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import SponsorForm from './SponsorForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';



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
      <footer className="footer">
  <a href="https://web.facebook.com/hagiosministriesintl/"><FontAwesomeIcon icon={faFacebook} /></a>
  <a href="https://www.youtube.com/@hagiosministriesinternational/"><FontAwesomeIcon icon={faYoutube} /></a>
  <a href="https://t.me/"><FontAwesomeIcon icon={faTelegram} /></a>
  <a href="https://www.instagram.com/hagios_ministries_intl/"><FontAwesomeIcon icon={faInstagram} /></a>
</footer>

    </div>
    </div>
  );
}

export default RegistrationPage;
