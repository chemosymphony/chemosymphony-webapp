import React from 'react';
import "../../styles/ShuttleTravel.css"
import europaFlipper from "../../assets/images/Europa_flipper.gif";


const ShuttleTravel = () => {
  return (
    <div className="space-container">
      <img src={europaFlipper} alt="Spaceship" className="spaceship" />
    </div>
  );
};

export default ShuttleTravel;
