import React from 'react';

export default function Mission() {
  return (
    <section className="mission-section">
      <div className="mission-grid">
        {/* Left Column: Mission Text + Group.svg beside paragraph */}
        <div className="mission-text-col">
          <h2 className="section-title">Our mission</h2>
          <div className="mission-text-with-nuts">
            <p className="section-text">
              Our mission is to make hands-on, maker-centered learning accessible across India, empowering young people to think critically, build confidently, and solve real-world problems beyond traditional classrooms.
            </p>
            <img src="/Group.svg" alt="Green hex nuts decoration" className="deco-green-nuts-beside-para" />
          </div>
        </div>

        {/* Center Assets: Bulb directly on Roadmap Line + Thin Dashed Curve to Paper Plane */}
        <div className="mission-center-assets">
          <img src="/bulb.png" alt="Lightbulb on roadmap line" className="deco-bulb-on-roadmap" />
          <svg className="bulb-to-plane-svg" viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 450 10 C 320 80, 160 60, 20 220" stroke="#E77B5D" strokeWidth="1.5" strokeDasharray="5 5" />
          </svg>
        </div>

        {/* Right Column: Girls With Tower Photo + Star + Orange Line Accent */}
        <div className="mission-visual-col">
          <img src="/star.svg" alt="Orange Star graphic" className="deco-star-tower" />
          <div className="tower-img-wrapper">
            <span className="orange-side-accent"></span>
            <img src="/GirlsWithTower.png" alt="Girls building innovation tower" className="mission-tower-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
