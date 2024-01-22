import React from 'react';
import owner from './owner.jpg';

export default function About() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'left', maxWidth: '70%', padding: '20px' }}>
        <h2 className="mb-5 mt-5">About Us</h2>
        <p>
          Welcome to our News App! We are dedicated to bringing you the latest and most relevant news from around the world.
          Our mission is to provide a reliable and convenient platform where you can stay informed about current events, business,
          sports, health, entertainment, science, and technology.
        </p>
        <p>
          Our team of experienced journalists and editors work tirelessly to deliver accurate and unbiased news coverage. 
          Whether you're interested in breaking news or in-depth analysis, we've got you covered.
        </p>
        <p>
          Thank you for choosing our News App. Feel free to explore different categories and stay updated with the stories that matter to you.
        </p>
        <p>
         Owner: [Bhawna Chilwal]
        </p>
      </div>
      <div style={{ flex: '1', textAlign: 'right' }}>
        <img src={owner} alt="Owner's Photo" style={{ maxWidth: '70%', borderRadius: '50%', marginBottom: '20px', marginTop:'20px'}} />
      </div>
    </div>
  );
}
