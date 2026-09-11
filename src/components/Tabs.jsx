import React from 'react';

export default function Tabs() {
  const tabs = [
    { id: 'story', label: 'MakerGhat story', href: 'https://makerghat.org/about-us/our-story' },
    { id: 'team', label: 'MakerGhat team', href: 'https://makerghat.org/about-us/team' },
    { id: 'support', label: 'Support system', href: 'https://makerghat.org/about-us/awards' },
    { id: 'alumni', label: 'Volunteers & Alumni', href: 'https://makerghat.org/about-us/vol-alum' },
  ];

  return (
    <div className="tabs-header">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          className={`tab-btn ${tab.id === 'story' ? 'active' : ''}`}
          data-tab={tab.id}
          href={tab.href}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
}
