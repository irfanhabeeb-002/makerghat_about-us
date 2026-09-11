import React from 'react';

export default function TimelineNode({ year, nodeClass, visualContent, popupBullets, isOpen, onToggle }) {

  return (
    <div className={`timeline-node ${nodeClass}`} data-year={year}>
      <div className="year-badge-wrapper">
        <button
          className={`year-badge-btn ${isOpen ? 'active' : ''}`}
          aria-expanded={isOpen}
          onClick={onToggle}
        >
          {year} <span className="badge-arrow">▼</span>
        </button>
      </div>
      <div className="node-visual">
        {visualContent}
      </div>
      <div className={`milestone-card-popup mobile-milestone-popup ${isOpen ? 'active' : ''}`}>
        <div className="card-arrow"></div>
        <ul>
          {popupBullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
