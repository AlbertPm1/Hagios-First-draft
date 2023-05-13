import React from 'react';
import RegistrationPage from './pages/RegistrationPage';
import SidePhoto from './pages/SidePhoto';
import myPhoto from './images/myPhoto.jpg'; // import the image file
import myPhoto2 from './images/myPhoto2.jpg'; // import the image file
import "./App.css";



function App() {
  return (

    <div className="container">
      <RegistrationPage />
      <SidePhoto />

      <div>
        <h1>
          <img src={myPhoto} alt="My Photo" /> {/* add the image to h1 */}

        </h1>
        <h2>
          <img src={myPhoto2} alt="My Photo2" /> {/* add the image to h1 */}

        </h2>
      </div>
    </div>
  );
}

export default App;
