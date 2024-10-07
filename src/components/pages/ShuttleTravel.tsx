import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
// @ts-ignore
import leftArrowImage from '../../assets/images/arrow.png';
// @ts-ignore
import rightArrowImage from '../../assets/images/arrow.png';
import spaceGif from '../../assets/images/Space.gif';
import europa from '../../assets/images/Europa_flipper.gif';
import {useNavigate} from "react-router-dom";

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url("../../assets/images/Space.gif");
  color: white;
  padding: 20px;
  overflow: hidden;
`;

const Header = styled.h1`
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TextCard = styled(motion.div)`
  flex: 2; // Aumenta a largura do TextCard
  background: white;
  color: black;
  border: 4px solid #000;
  box-shadow: 3px 3px 0px #333;
  padding: 20px;
  max-width: 400px;
  font-family: "Montserrat", serif;
  text-align: justify;
  position: relative;
  height: 400px;
  font-size: 16px;
`;

const Card = styled(motion.div)`
  flex: 1; // Diminui a largura do Card
  background: transparent;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin-left: 20px;
`;

const Gif = styled.img`
  height: auto;
  border: none;
`;

const PrivacyScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--accent);
  z-index: 2;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  margin-bottom: 10px;
`;

const ArrowButton = styled(motion.button)<{ disabled: boolean }>`
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  z-index: 1;
  margin: 0 10px;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
`;

const ArrowImage = styled.img`
  width: 48px;
  height: 48px;
`;

const LeftArrowImage = styled.img`
  width: 48px;
  height: 48px;
  transform: scaleX(-1);
`;

const NextButton = styled(motion.button)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  text-transform: uppercase;
  font-family: "Press Start 2P", "Montserrat", serif;
  padding: 30px 50px;
  font-size: 24px;
  background-color: white;
  color: #0e0e0e;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Highlight = styled(motion.span)`
  font-family: "Press Start 2P", "Montserrat", serif;
  font-weight: 200;
  font-size: 11px;
  text-align: center;
`;

const pageVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: {
            duration: 0.5,
        },
    },
};


const GameText = styled(motion.p)`
  font-family: "Press Start 2P", "Montserrat", serif;
`;

const cardVariants = {
    initial: {
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        },
    },
};

const textContents = [
    {
        title: "Going on a Mission",
        text: (
            <p>
                Our satellite is on its way towards the TRAPPIST-1g exoplanet. We are on the lookout for signs of life.
            </p>
        ),
    },
    {
        title: "Expanding the Habitable Zone",
        text: (
            <p>
                Traditionally, the "habitable zone" refers to the region around a star where conditions are just right for liquid water to exist on a planet's surface. Exoplanets like TRAPPIST-1g, having an ocean underground, expand this concept. Though its surface is freezing cold, internal heating mechanisms can keep an underground ocean in a liquid state. This means life-supporting conditions might exist in places we previously thought were inhospitable.
            </p>
        ),
    },
    {
        title: " Internal Energy Sources",
        text: (
            <p>
                For a subsurface ocean to remain liquid beneath kilometers of ice, the planet needs internal energy sources. Geothermal heat from radioactive decay or tidal heating caused by gravitational interactions with a star or nearby moons can provide the necessary warmth. These energy sources might also drive hydrothermal vents on the ocean floor, creating rich chemical environments where life could originate and flourish, similar to ecosystems found near Earth's deep-sea vents.
            </p>
        ),
    },
    {
        title: "Ice Shells and Environmental Stability",
        text: (
            <p>
                The thick ice layer acts as a protective barrier and insulator. It shields the underlying ocean from extreme temperature fluctuations, cosmic radiation, and micrometeorite impacts. The ice maintains a stable environment where liquid water persists over geological timescales, creating a consistent habitat that could support life forms adapted to these unique conditions.
            </p>
        ),
    },
    {
        title: "Life Without Atmospheres",
        text: (
            <p>
                While atmospheres are crucial for surface life, subsurface oceans beneath ice layers may not require them. The thick ice serves as a shield against harmful radiation and space debris, reducing the necessity for an atmospheric layer. Although an atmosphere can offer additional benefits, life in these hidden oceans relies more on the protection and insulation provided by the ice.
            </p>
        ),
    },
    {
        title: "Energy Sources for Life",
        text: (
            <p>
                As we explore distant planets, we search for energy sources that life can use. On Earth, life depends largely on energy from sunlight, which enables photosynthesis—allowing plants to produce food and oxygen. Energy sources are essential for supporting life, but perhaps there are other ways life could harness energy in different environments. This mystery inspires us to consider new possibilities.
            </p>
        ),
    },
];

const PreviousChapter = styled(motion.button)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  text-transform: uppercase;
  font-family: "Press Start 2P", "Montserrat", serif;
  padding: 30px 50px;
  font-size: 24px;
  background-color: white;
  color: black;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TravelPage: React.FC = () => {
    const navigate = useNavigate()
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [ended, setEnded] = useState(false);

    const handleNext = () => {
        const nextIndex = currentTextIndex + 1;
        setCurrentTextIndex(nextIndex);

        if (nextIndex === textContents.length - 1) {
            setEnded(true);
        }
    };

    const handlePrev = () => {
        const prevIndex = currentTextIndex - 1;
        setCurrentTextIndex(prevIndex);

        if (ended && prevIndex < textContents.length - 1) {
            setEnded(false);
        }
    };

    return (
        <AnimatePresence>
            <PrivacyScreen
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: 0 }}
                className="privacy-screen"
            />
            <PageContainer
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Header><GameText>{textContents[currentTextIndex].title}</GameText></Header>
                <ContentContainer>
                    <Card variants={cardVariants}>
                        <Gif src={europa} alt="Space GIF" /> {/* Substitua o caminho do GIF aqui */}
                    </Card>
                    <TextCard variants={cardVariants}>
                        {textContents[currentTextIndex].text}
                        <ArrowContainer>
                            <ArrowButton
                                onClick={handlePrev}
                                whileTap={{ scale: 0.8 }}
                                disabled={currentTextIndex === 0}
                            >
                                <LeftArrowImage src={leftArrowImage} alt="Left Arrow" />
                            </ArrowButton>
                            <ArrowButton
                                onClick={handleNext}
                                whileTap={{ scale: 0.8 }}
                                disabled={currentTextIndex === textContents.length - 1}
                            >
                                <ArrowImage src={rightArrowImage} alt="Right Arrow" />
                            </ArrowButton>
                        </ArrowContainer>
                    </TextCard>
                </ContentContainer>
                <NextButton whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate('/system')}>
                    {currentTextIndex + 1 === textContents.length ? "Next":"Skip"}
                </NextButton>
                <PreviousChapter
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate("/news:future")}
                >
                    Previous
                </PreviousChapter>
            </PageContainer>
        </AnimatePresence>
    );
};

export default TravelPage;
