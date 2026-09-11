import React, { useState } from 'react';

const navigation = [
  { label: 'About us', href: 'https://makerghat.org/about-us/our-story', links: [
    { label: 'MakerGhat Story', href: 'https://makerghat.org/about-us/our-story' },
    { label: 'MakerGhat Team', href: 'https://makerghat.org/about-us/team' },
    { label: 'Volunteers & Alumni', href: 'https://makerghat.org/about-us/vol-alum' },
    { label: 'Awards', href: 'https://makerghat.org/about-us/awards' },
  ] },
  { label: 'Space', href: 'https://makerghat.org/space/makerspace', links: [
    { label: 'Makerspace', href: 'https://makerghat.org/space/makerspace' },
    { label: 'Makerkit', href: 'https://makerghat.org/space/makerkits' },
  ] },
  { label: 'Curriculum', href: 'https://makerghat.org/curriculum', links: [
    { label: 'Framework', href: 'https://makerghat.org/curriculum/framework' },
    { label: 'Resources', href: 'https://makerghat.org/curriculum/resources' },
  ] },
  { label: 'Training', href: 'https://makerghat.org/training' },
  { label: 'Evidence', href: 'https://makerghat.org/evidence', links: [
    { label: 'Framework', href: 'https://makerghat.org/evidence/framework' },
    { label: 'Dashboard', href: 'https://makerghat.org/evidence/dashboard' },
    { label: 'Reports', href: 'https://makerghat.org/evidence/reports' },
  ] },
  { label: 'Programs', href: 'https://makerghat.org/programs', links: [
    { label: 'MakerGhat Fellowship', href: 'https://makerghat.org/programs/makerghat-fellowship' },
    { label: 'Shikshagraha', href: 'https://makerghat.org/programs/shikshagraha' },
    { label: 'IGNITE Incubator', href: 'https://makerghat.org/programs/ignite-incubator' },
  ] },
  { label: 'Get involved', href: 'https://makerghat.org/get-involved', links: [
    { label: 'Careers', href: 'https://makerghat.org/get-involved/careers' },
    { label: 'Volunteer', href: 'https://makerghat.org/get-involved/volunteer' },
    { label: 'Donate', href: 'https://makerghat.org/get-involved/donate' },
    { label: 'Partner', href: 'https://makerghat.org/get-involved/partner' },
  ] },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="nav-wrapper">
          <a className="logo" href="https://makerghat.org/" aria-label="MakerGhat home" onClick={closeMenus}>
            <img src="/MakerGhat_logo.svg" alt="MakerGhat Logo" className="logo-image" />
          </a>
          <button className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen((isOpen) => !isOpen)} aria-label="Toggle navigation menu" aria-expanded={mobileMenuOpen}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
            {navigation.map((item) => {
              const isOpen = openMenu === item.label;
              return (
                <div className={`nav-item ${item.links ? 'dropdown' : ''} ${isOpen ? 'is-open' : ''}`} key={item.label}>
                  <a href={item.href} className="nav-link" onClick={closeMenus}>{item.label}</a>
                  {item.links && <>
                    <button className="nav-dropdown-toggle" type="button" aria-label={`Show ${item.label} links`} aria-expanded={isOpen} onClick={() => setOpenMenu(isOpen ? null : item.label)}><span className="dropdown-arrow">▾</span></button>
                    <ul className="nav-dropdown-menu">
                      {item.links.map((link) => <li key={link.href}><a href={link.href} onClick={closeMenus}>{link.label}</a></li>)}
                    </ul>
                  </>}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
