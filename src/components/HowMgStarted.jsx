import React from 'react';

export default function HowMgStarted() {
  return (
    <section className="mg-start-section">
      <div className="mg-start-grid">
        <div className="mg-start-text">
          <h2 className="section-title">How did MG start</h2>
          <p className="section-text">
            MG origin story featuring founders, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
          </p>
          <div className="deco-arrows-left">
            <span>❮❮</span>
          </div>
        </div>
        <div className="mg-start-visual">
          <img src="/group_pic.png" alt="MakerGhat Founders and group_pic" className="mg-founders-photo" />
        </div>
      </div>
    </section>
  );
}
