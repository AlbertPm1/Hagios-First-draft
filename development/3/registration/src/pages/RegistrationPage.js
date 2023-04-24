import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import MinisterForm from './MinisterForm';
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
          <div className="column">
            <button className={showRegistrationForm ? 'active' : ''} onClick={() => setShowRegistrationForm(true)}>Attendee</button>
          </div>
          <div className="Minister-form"></div>
          <div className="column">
            <button className={!showRegistrationForm ? 'active' : ''} onClick={() => setShowRegistrationForm(false)}>Minister</button>
          </div>
          <div className="form-container">
            {showRegistrationForm ? <RegistrationForm /> : <MinisterForm />}
          </div>
        </div>
        <footer className="footer">
          <a href="https://web.facebook.com/hagiosministriesintl/"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.youtube.com/@hagiosministriesinternational/"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://t.me/HagiosMinistriesIntl"><FontAwesomeIcon icon={faTelegram} /></a>
          <a href="https://www.instagram.com/hagios_ministries_intl/"><FontAwesomeIcon icon={faInstagram} /></a>
        </footer>
      </div>
    </div>
  );
}

export default RegistrationPage;
