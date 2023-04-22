import React from 'react';
import myPhoto3 from '../images/myPhoto3.jpg'; // import the image file

function SidePhoto() {
  return (
    <img src={require('../images/myPhoto3.jpg')} alt="SidePhoto" className="side-photo" />
  );
}

export default SidePhoto;