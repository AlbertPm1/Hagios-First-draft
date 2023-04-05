import React from 'react';
import SidePhoto from './pages/SidePhoto';
import Footer from './pages/Footer';
import RegistrationPage from './pages/RegistrationPage';
import "./App.css";
function App() {
  return (
    <div>
      <h1>Register as a</h1>
      
      <div className="container">
        <SidePhoto />
        
        <RegistrationPage />
      <Footer />
    </div>
    </div>
    
    
  );
}

export default App;
