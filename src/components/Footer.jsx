import React from 'react';

const footerLinks = [
  { label: 'About Us', href: 'https://makerghat.org/about-us/our-story' },
  { label: 'Partner', href: 'https://makerghat.org/get-involved/partner' },
  { label: 'Careers', href: 'https://makerghat.org/get-involved/careers' },
  { label: 'Volunteer', href: 'https://makerghat.org/get-involved/volunteer' },
  { label: 'Donate', href: 'https://makerghat.org/get-involved/donate' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-skyline-box"><img src="/illustrations_before_footer.png" alt="Village Landscape Silhouette" className="footer-skyline-img" /></div>
      <div className="footer-body">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col footer-connect">
              <h3 className="footer-heading">Connect<br />with Us</h3>
              <ul className="footer-links-list footer-action-links">{footerLinks.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
              <div className="contact-items">
                <a className="contact-item" href="tel:+919447756484"><span className="contact-icon-circle" aria-hidden="true">&#9742;</span> +91 9447756484</a>
                <a className="contact-item" href="mailto:info@makerghat.org"><span className="contact-icon-circle" aria-hidden="true">&#9993;</span> info@makerghat.org</a>
              </div>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Resources</h4>
              <ul className="footer-links-list">
                <li><a href="https://makerghat.org/curriculum/framework#framework">Curriculum framework</a></li>
                <li><a href="https://makerghat.org/evidence/framework#skills">Skills definition guide</a></li>
                <li><a href="https://makerghat.org/curriculum/resources">Curriculum Resources</a></li>
                <li><a href="https://makerghat.org/evidence/dashboard">Dashboard</a></li>
                <li><a href="https://makerghat.org/evidence/reports">Reports</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">MG Pillars</h4>
              <ul className="footer-links-list">
                <li><a href="https://makerghat.org/space/makerspace">Space</a></li>
                <li><a href="https://makerghat.org/curriculum/framework">Curriculum</a></li>
                <li><a href="https://makerghat.org/training">Training</a></li>
                <li><a href="https://makerghat.org/evidence/framework">Evidence</a></li>
              </ul>
              <h4 className="footer-col-title footer-programs-title">Programs</h4>
              <ul className="footer-links-list">
                <li><a href="https://makerghatfellowship.makerghat.org/">MakerGhat Fellowship</a></li>
                <li><a href="https://makerghat.org/programs/shikshagraha">Shikshagraha</a></li>
              </ul>
            </div>
            <div className="footer-col footer-brand">
              <a className="footer-logo-wrapper" href="https://makerghat.org/" aria-label="MakerGhat home"><img src="/makerghat_footer_logo.png" alt="MakerGhat Footer Logo" className="footer-logo-img" /></a>
              <a className="newsletter-subscribe-btn" href="https://makerghat.substack.com/">Subscribe to our newsletter</a>
              <div className="footer-divider"></div>
              <div className="social-icons-row">
                <a href="https://www.instagram.com/makerghat?igsh=c3V6NDRyNmJ0MzY4" aria-label="Instagram" className="social-icon"><img src="/insta_logo.png" alt="" /></a>
                <a href="https://makerghat.substack.com/welcome" aria-label="Substack" className="social-icon"><img src="/substack.png" alt="" /></a>
                <a href="https://www.youtube.com/@makerghat9609" aria-label="YouTube" className="social-icon"><img src="/youtube_logo.svg" alt="" /></a>
                <a href="https://www.linkedin.com/company/makerghat" aria-label="LinkedIn" className="social-icon"><img src="/linkedln_logo.png" alt="" /></a>
              </div>
              <p className="license-text">MakerGhat and its assets are licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA4.0</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
