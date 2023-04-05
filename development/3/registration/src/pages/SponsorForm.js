import React from 'react';

function SponsorForm() {
  return (
    <form>
      <h2>Sponsor Registration</h2>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div className="form-group">
        <label htmlFor="ministryName">Ministry Name:</label>
        <input type="text" id="ministryName" name="ministryName" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">First Name:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Second name:</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <textarea id="email" name="required"></textarea>
        <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default SponsorForm;
