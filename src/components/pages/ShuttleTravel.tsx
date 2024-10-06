import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../../styles/ShuttleTravel.css";
import europaFlipper from "../../assets/images/Europa_flipper.gif";
import Card from "../atoms/Card";

const ShuttleTravel = () => {
  const navigate = useNavigate(); // Step 1: Initialize the useNavigate hook

  // Step 2: Create an array of card data with title and text
  const cards = [
    {
      title: "Importance of Water 1/2",
      text: (
        <p>
          <span className='bold-highlight'>Water</span> is essential for life because it enables <span className='bold-highlight'>chemical reactions</span> that sustain <span className='bold-highlight'>living organisms</span>. In liquid form, water allows molecules to interact, forming the <span className='bold-highlight'>building blocks of life like</span> proteins and DNA. Without water, it would be difficult for life as we know it to exist on any planet.
        </p>
      ),
    },
    {
      title: "Importance of Water 2/2",
      text: (
        <p>
          Water also <span className='bold-highlight'>stabilizes</span> a planet's climate by absorbing and distributing heat, creating a more stable environment for life. It helps prevent extreme temperature swings and supports the cycles necessary for life to thrive.
        </p>
      ),
    },
    {
      title: "Habitable Zone",
      text: (
        <p>
          The habitable zone is the area around a star where conditions <span className='bold-highlight'>allow water to exist in liquid form</span>. If a planet is too close to its star, water will evaporate; too far, and it freezes. The right distance keeps water in liquid form, crucial for supporting life.
        </p>
      ),
    },
    {
      title: "Atmosphere",
      text: (
        <p>
          A planet's atmosphere <span className='bold-highlight'>regulates temperature</span>, maintains stability, and can protect from <span className='bold-highlight'>harmful radiation.</span> It also holds essential gases like oxygen or carbon dioxide. The right atmospheric conditions can support life, even if different from Earth's.
        </p>
      ),
    },
    {
      title: "Geothermal Activity",
      text: (
        <p>
          Geothermal activity <span className='bold-highlight'>provides energy</span> without sunlight, essential for deep ocean ecosystems on Earth. On exoplanets, volcanic or geothermal sources can sustain life by releasing heat and chemicals into the environment, creating habitable conditions even in dark places.
        </p>
      ),
    },
    {
      title: "Magnetic Field",
      text: (
        <p>
          A strong magnetic field <span className='bold-highlight'>shields</span> a planet from harmful solar radiation, protecting its atmosphere and water. It can also <span className='bold-highlight'>indicate an active core</span>, which supports geothermal activity. Without this protection, life would struggle to survive on the surface.
        </p>
      ),
    },
  ];

  // Step 3: Create state variables to track the current card index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Step 4: Define functions to handle next and previous buttons
  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Step 5: Handle navigation to another page when the last card is reached
  const handleRedirect = () => {
    navigate("/another-page"); // Navigate to another page (you can change the route)
  };

  return (
    <div className="space-container">
      <img src={europaFlipper} alt="Spaceship" className="spaceship" />
      <div className='informative-elements'>
        {/* Step 6: Render the current card based on the currentIndex */}
        <Card
          title={cards[currentIndex].title}
          text={cards[currentIndex].text}
        />

        {/* Step 7: Render Previous and Next buttons */}
        <div className="button-container">
          {/* Show the "Previous" button only if the currentIndex is greater than 0 */}
          {currentIndex > 0 && (
            <button onClick={handlePrevious}>Previous</button>
          )}

          {/* Step 8: Conditionally render the "Next" button or the "Redirect" button */}
          {currentIndex < cards.length - 1 ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={handleRedirect}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShuttleTravel;
