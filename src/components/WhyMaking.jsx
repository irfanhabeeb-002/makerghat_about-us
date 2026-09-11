import React from 'react';

export default function WhyMaking() {
  return (
    <section className="why-making-section">
      <div className="why-making-grid">
        {/* Left Column: girlsWithProduct photo + paper plane + craft tools */}
        <div className="why-making-visual-col">
          <div className="product-img-wrapper">
            <img src="/paper_plane.png" alt="Paper airplane" className="deco-paper-plane-left" />
            <img src="/girlsWithProduct.png" alt="Girls holding product project" className="why-product-img" />
            <span className="deco-green-ring-small-floating"></span>
            <img src="/LED_lights.png" alt="LED lights" className="deco-led-lights-floating" />
          </div>
        </div>
        {/* Right Column: Why Making Text aligned cleanly to the right */}
        <div className="why-making-text-col">
          <h2 className="section-title">Why making?</h2>
          <p className="section-text">
            Making bridges the gap between knowledge and application through experiential learning. It builds 21st-century skills that empowers our youth to become confident job-seekers and entrepreneurs.
          </p>
        </div>
      </div>
      <img src="/scissors.png" alt="Orange scissors on roadmap line" className="deco-scissors-enlarged-on-roadmap" />
    </section>
  );
}
