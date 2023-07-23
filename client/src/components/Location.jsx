import React from 'react';

function Location() {
  return (
    <section className="location">
      <iframe
        title="gmap-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.6529674774456!2d88.41660681495861!3d22.517199985211327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f58b9feec5%3A0x30f8067b73c45d8!2sHeritage%20Institute%20of%20Technology%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1672244705291!5m2!1sen!2sin"
        width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Location;
