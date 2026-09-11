import React, { useState } from 'react';
import TimelineNode from './TimelineNode.jsx';

export default function Timeline() {
  const [activeYear, setActiveYear] = useState(null);
  const nodes = [
    {
      year: '2018',
      nodeClass: 'node-2018',
      visualContent: (
        <>
          <div className="node-2018-visual-wrap">
            <img src="/spanner.svg" alt="Spanner icon" className="node-icon spanner-icon node-2018-spanner" />
            <img src="/addressing_kids.png" alt="2018 - Addressing kids" className="node-cutout-img node-2018-img" />
          </div>
        </>
      ),
      popupBullets: [
        'MakerGhat launches its first makerspace in Powai, Mumbai'
      ]
    },
    {
      year: '2019',
      nodeClass: 'node-2019',
      visualContent: (
        <>
          <div className="node-2019-visual-wrap">
            <div className="green-circle-bg node-2019-circle"></div>
            <img src="/3d_printer.svg" alt="3D Printer illustration" className="node-cutout-img node-2019-img" />
            <img src="/Group 412.svg" alt="Coin in hand icon" className="node-icon coin-icon node-2019-coin" />
          </div>
          <span className="down-arrow-orange node-2019-arrow">▼</span>
        </>
      ),
      popupBullets: [
        'We secure our first institutional grant to expand maker-education',
        'We receive our first individual grant to grow the program to 3 schools'
      ]
    },
    {
      year: '2020',
      nodeClass: 'node-2020',
      visualContent: (
        <>
          <div className="node-2020-visual-wrap">
            <div className="green-stairs-bg"></div>
            <div className="purple-vertical-line"></div>
            <img src="/girls_makers.svg" alt="2020 girls makers" className="node-cutout-img node-2020-img" />
            <div className="covid-icons-cluster">
              <span className="covid-icon c1">🦠</span>
              <span className="covid-icon c2">🦠</span>
            </div>
          </div>
          <span className="down-arrow-orange node-2020-arrow">▼</span>
        </>
      ),
      popupBullets: [
        'We respond to COVID with recovery-focused education initiatives',
        'We launched virtual programs with VIDYA and Agastya Foundations',
        'We opened a second makerspace in Thane'
      ]
    },
    {
      year: '2021',
      nodeClass: 'node-2021',
      visualContent: (
        <>
          <div className="tn-green-map-wrapper">
            <img src="/bg_green_map.png" alt="TN Green Map" className="tn-map-img" />
            <img src="/girlWithTest_tube.png" alt="2021 Tamil Nadu programs" className="node-cutout-img node-2021-img" />
            <img src="/gate_illustration.png" alt="Mumbai Monument Icon" className="mumbai-monument-icon" />
          </div>
          <img src="/gate_illustration.png" alt="Mumbai Monument Icon" className="mumbai-monument-icon" />
          <span className="arrows-left-orange node-2021-arrows">❮❮</span>
          <span className="down-arrow-orange node-2021-arrow">▼</span>
        </>
      ),
      popupBullets: [
        'We expanded maker-education programs to Tamil Nadu',
        'We partnered with the JSW Foundation for our first CSR-led programs (the Museum of Solutions, Mumbai)'
      ]
    },
    {
      year: '2022',
      nodeClass: 'node-2022',
      visualContent: (
        <>
          <div className="mh-orange-map-wrapper">
            <img src="/bg_orangeMap.png" alt="Maharashtra Map Background" className="mh-map-bg-img" />
            <img src="/girls_building.svg" alt="2022 girls building" className="node-cutout-img node-2022-img" />
          </div>
          <span className="arrows-right-orange node-2022-arrows">❯❯</span>
        </>
      ),
      popupBullets: [
        'We launched statewide programs in Odisha'
      ]
    },
    {
      year: '2023',
      nodeClass: 'node-2023',
      visualContent: (
        <>
          <div className="yellow-spiral-wrapper">
            <img src="/yellow spiaral.png" alt="Yellow Concentric Spiral" className="yellow-spiral-img" />
            <img src="/Makers_kids.svg" alt="2023 ATL partnership Makers kids" className="node-cutout-img node-2023-img" />
            <img src="/educaion_logo.png" alt="Education Icon" className="education-logo-icon" />

          </div>
          <span className="down-arrow-orange node-2023-arrow">▼</span>
        </>
      ),
      popupBullets: [
        'We became official curriculum partner for NITI Aayog\'s Atal Tinkering Labs (ATLs)',
        'We opened makerspaces across districts in Tamil Nadu & Karnataka',
        'We launched a new program with the Piramal Foundation in Jhunjhunu, Rajasthan',
        'We developed & launched our 3-levels tinkering curriculum & EdApp LMS across all 10,000+ ATLs in India'
      ]
    },
    {
      year: '2024',
      nodeClass: 'node-2024',
      visualContent: (
        <>
          <div className="node-2024-visual-wrap">
            <img src="/rocket.png" alt="Rocket icon" className="rocket-img-icon" />
            <img src="/ignite-Youth_conference_group_pic.svg" alt="2024 IGNITE Youth conference cohort" className="node-cutout-img node-2024-img" />
          </div>
          <span className="arrows-left-orange node-2024-arrows">❮❮</span>
          <span className="down-arrow-orange node-2024-arrow">▼</span>
        </>
      ),
      popupBullets: [
        'We launched our first IGNITE incubator cohort for young innovators across rural Tamil Nadu'
      ]
    },
    {
      year: '2025',
      nodeClass: 'node-2025',
      visualContent: (
        <>
          <div className="purple-rect-wrapper">
            <img src="/Rectangle 1040.png" alt="Purple rectangle shape" className="purple-rect-img" />
            <img src="/storytelling 1.svg" alt="2025 Shikshagraha movement storytelling" className="node-cutout-img node-2025-img" />
            <img src="/STEM_logo.svg" alt="STEM logo icon" className="stem-logo-icon" />
          </div>
          <span className="down-arrow-orange node-2025-arrow">▼</span>
        </>
      ),
      popupBullets: [
        'We became anchors for the pan-India STEM initiative under the Shikshagraha movement',
        'We launched the MakerGoon Fellowship in rural Maharashtra',
        'We launched a district-wide Nashik program with 12 high-end makerspaces'
      ]
    },
    {
      year: '2026',
      nodeClass: 'node-2026',
      visualContent: (
        <>
          <div className="puzzle-bg-wrapper">
            <img src="/puzzle.svg" alt="Puzzle background" className="puzzle-svg-bg" />
            <img src="/discovery_diary.svg" alt="2026 Discovery Diary" className="node-cutout-img node-2026-img" />
          </div>
          <span className="arrows-right-orange node-2026-arrows">❯❯</span>
          <div className="green-end-dot"></div>
        </>
      ),
      popupBullets: [
        'We published the Discovery Diary, our first at-home intervention for hands-on learning for children'
      ]
    }
  ];


  return (
    <>
      <div className="timeline-nodes-grid">
        {nodes.map((node) => (
          <TimelineNode
            key={node.year}
            year={node.year}
            nodeClass={node.nodeClass}
            visualContent={node.visualContent}
            popupBullets={node.popupBullets}
            isOpen={activeYear === node.year}
            onToggle={() => setActiveYear(activeYear === node.year ? null : node.year)}
          />
        ))}
      </div>
      {activeYear && (
        <section className="timeline-details-panel" aria-live="polite">
          <h3>{activeYear} milestone</h3>
          <ul>{nodes.find((node) => node.year === activeYear).popupBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
        </section>
      )}
    </>
  );
}
