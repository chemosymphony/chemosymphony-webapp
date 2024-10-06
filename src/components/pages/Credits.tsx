// src/CreditsPage.js

import React from 'react';
import "../../styles/Credits.css";

const Credits: React.FC = () => {
  return (
    <div className="credits-page">
      <h1 className="credits-title">CREDITS</h1>
      <div className="credits-content">
        <section className="credits-section">
          <h2>Developers</h2>
          <ul>
            <li><strong>Pietro Grazzioli Golfeto</strong></li>
            <li><strong>Gustavo Ferreira Gitzel</strong> - @gustavogitzel </li>
            <li><strong>Gustavo Moraes</strong> - @moraguma</li>
          </ul>
        </section>
        <section className="credits-section">
          <h2>Artists</h2>
          <ul>
            <li><strong>Duda Bauermann Cremm</strong> - @dudacremmf</li>
      
          </ul>
        </section>
      
      </div>
    </div>
  );
};

export default Credits;
