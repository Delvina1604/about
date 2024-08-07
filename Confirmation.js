import React from 'react';
import './Confirmation.css';

function Confirmation() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lenskart at Home</h1>
      </header>
      <main className="confirmation-page">
        <div className="confirmation-details">
          <h2>Thank You</h2>
          <p>We are finding a professional for you.</p>
          <div className="confirmation-info">
            <div className="confirmation-item">
              <h3>Appointment Confirmed</h3>
              <p>Booked on 2 August 2024</p>
              <p>Booking ID: 1292406564</p>
            </div>
            <div className="confirmation-item">
              <h3>Appointment Address</h3>
              <p>81, Jawahr Street, Room No.81, Jawaharlal Nehru Stadium</p>
              <p>Raja Muthiah Rd, Kannappar Thidal, Periyamet, Chennai, Tamil Nadu 600003</p>
            </div>
            <div className="confirmation-item">
              <h3>Appointment Time</h3>
              <p>Today, 2 Aug, 2024</p>
              <p>01:00 PM</p>
              <button>Add to Calendar</button>
            </div>
          </div>
          <p>Amount to be paid after visit: ₹99</p>
          <p>Save this number to stay connected: +91 8069156436</p>
          <button>View Orders</button>
        </div>
        <div className="how-it's-done">
          <h3>How it's done</h3>
          <div className="steps">
            <div className="step">
              <h4>10 feet of Space Needed</h4>
              <p>For a good eye exam, use a well-lit room with 10 feet of space.</p>
            </div>
            <div className="step">
              <h4>12 Step Eye Checkup</h4>
              <p>Experience store-like eye testing from the comfort of your home.</p>
            </div>
            <div className="step">
              <h4>Try on 150+ frames</h4>
              <p>Choose from Lenskart's trending and bestselling frames.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Confirmation;
