import React from 'react';
import Header from './components/Header.jsx';
import Tabs from './components/Tabs.jsx';
import Hero from './components/Hero.jsx';
import Mission from './components/Mission.jsx';
import WhyMaking from './components/WhyMaking.jsx';
import HowMgStarted from './components/HowMgStarted.jsx';
import Timeline from './components/Timeline.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app-root">
      <Header />

      <div className="page-wrapper">
        <Tabs />

        <main className="main-card">
          <Hero />

          <div className="story-timeline-wrapper">
            <div className="roadmap-svg-container">
              <img src="/road-solid.svg" alt="" className="roadmap-line-svg roadmap-line-solid" />
              <img src="/road-dashed.svg" alt="" className="roadmap-line-svg roadmap-line-dashed" />
            </div>

            <Mission />
            <WhyMaking />
            <HowMgStarted />
            <Timeline />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
