import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
// @ts-ignore
import leftArrowImage from '../../assets/images/arrow.png';
// @ts-ignore
import rightArrowImage from '../../assets/images/arrow.png';

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
  flex: 1;
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

const GameText = styled(motion.p)`
  font-family: "Press Start 2P", "Montserrat", serif;
`;

const Highlight = styled(motion.span)`
  font-family: "Press Start 2P", "Montserrat", serif;
  font-weight: 200;
  font-size: 11px;
  text-align: center;
`;

const Card = styled(motion.div)`
  flex: 2;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin-left: 20px;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 500px;
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
    <>
        <Highlight>TRAPPIST-1e</Highlight> is similar in size to Earth and is located within the habitable zone of its star. It likely has a almost 40-kilometer-thick ice layer, with a possible subsurface ocean beneath, kept warm by heat generated from a metallic core. This internal heating might support environments capable of sustaining life, though the thick ice would block sunlight, posing challenges for photosynthesis.
    </>,
    <>
        TRAPPIST-1e is also tidally locked, meaning one side always faces its star while the other remains dark. This could create a "terminator line" where temperatures might be milder and potentially more conducive to life.
    </>,
    <>
        The probe will release a lander to touch down on a frozen lake. Using thermal technology, the lander will melt through the ice, searching for geothermal activity and potential signs of habitability below the surface.
    </>,
    <p>
        As the probe proceeds with its mission, it will release a smaller lander to touch down on one of the frozen lakes. Equipped with thermal technology, the lander will melt through the ice, searching for subsurface oceans and analyzing the water for signs of geothermal activity and life.
    </p>
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
                <Header><GameText>Getting to Know the Destination</GameText></Header>
                <ContentContainer>
                    <TextCard variants={cardVariants}>
                        {textContents[currentTextIndex]}
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
                    <Card variants={cardVariants}>
                        <Iframe src="https://eyes.nasa.gov/apps/exo/#/planet/TRAPPIST-1_g" />
                    </Card>
                </ContentContainer>
                {ended && (
                    <NextButton
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.location.href = '/ice'}
                    >
                        Next
                    </NextButton>
                )}
            </PageContainer>
        </AnimatePresence>
    );
};

export default PlanetPage;
