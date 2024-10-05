import React from 'react';
import "../../styles/ShuttleTravel.css"
import europaFlipper from "../../assets/images/Europa_flipper.gif";
import Card from "../atoms/Card"


const ShuttleTravel = () => {
  return (
    <div className="space-container">
      <img src={europaFlipper} alt="Spaceship" className="spaceship" />
      <div className='informative-elements'>
        <Card />
      </div>
    </div>
  );
};

export default ShuttleTravel;
