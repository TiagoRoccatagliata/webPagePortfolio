import React from 'react';
import '../styles/styles.css';

const ContactSection = () => {
  return (
    <section id="contact" class="contact-section">
    <div class="contact-section-header">
      <h2>Let's work together...</h2>
      <p>How do you take your coffee?</p>
    </div>
    <div class="contact-links">
      <a id="profile-link" href="https://github.com/TiagoRoccatagliata" target="_blank" class="btn contact-details"><i class="fab fa-github"></i> GitHub</a>
      <a href="mailto:tiagoroccatagliata@gmail.com" class="btn contact-details"><i class="fas fa-at"></i> Send a mail</a>
      <a href="tel:2235578922" class="btn contact-details"><i class="fas fa-mobile-alt"></i> Call me</a>
    </div>
  </section>
  );
};

export default ContactSection;