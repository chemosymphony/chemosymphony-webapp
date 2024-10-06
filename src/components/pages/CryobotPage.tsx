import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
// @ts-ignore
import leftArrowImage from '../../assets/images/arrow.png';
// @ts-ignore
import rightArrowImage from '../../assets/images/arrow.png';
import cryobot from '../../assets/images/cryobot.jpg';

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
  max-width: 500px;
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
  font-size: 32px;
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
        title: "Importance of Water 1/2",
        text: (
            <p>
                <Highlight>Water</Highlight> is essential for life because it enables <Highlight>chemical reactions</Highlight> that sustain <Highlight>living organisms</Highlight>. In liquid form, water allows molecules to interact, forming the <Highlight>building blocks of life like</Highlight> proteins and DNA. Without water, it would be difficult for life as we know it to exist on any planet.
            </p>
        ),
    },
    {
        title: "Importance of Water 2/2",
        text: (
            <p>
                Water also <Highlight>stabilizes</Highlight> a planet's climate by absorbing and distributing heat, creating a more stable environment for life. It helps prevent extreme temperature swings and supports the cycles necessary for life to thrive.
            </p>
        ),
    },
    {
        title: "Habitable Zone",
        text: (
            <p>
                The habitable zone is the area around a star where conditions <Highlight>allow water to exist in liquid form</Highlight>. If a planet is too close to its star, water will evaporate; too far, and it freezes. The right distance keeps water in liquid form, crucial for supporting life.
            </p>
        ),
    },
    {
        title: "Atmosphere",
        text: (
            <p>
                A planet's atmosphere <Highlight>regulates temperature</Highlight>, maintains stability, and can protect from <Highlight>harmful radiation.</Highlight> It also holds essential gases like oxygen or carbon dioxide. The right atmospheric conditions can support life, even if different from Earth's.
            </p>
        ),
    },
    {
        title: "Geothermal Activity",
        text: (
            <p>
                Geothermal activity <Highlight>provides energy</Highlight> without sunlight, essential for deep ocean ecosystems on Earth. On exoplanets, volcanic or geothermal sources can sustain life by releasing heat and chemicals into the environment, creating habitable conditions even in dark places.
            </p>
        ),
    },
    {
        title: "Magnetic Field",
        text: (
            <p>
                A strong magnetic field <Highlight>shields</Highlight> a planet from harmful solar radiation, protecting its atmosphere and water. It can also <Highlight>indicate an active core</Highlight>, which supports geothermal activity. Without this protection, life would struggle to survive on the surface.
            </p>
        ),
    },
];

const PlanetPage: React.FC = () => {
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
                        <Gif src={cryobot} alt="Space GIF" /> {/* Substitua o caminho do GIF aqui */}
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
                            onClick={() => window.location.href = '/system'}>
                    Next
                </NextButton>
            </PageContainer>
        </AnimatePresence>
    );
};

export default PlanetPage;
