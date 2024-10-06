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
  text-decoration: none;
  border-bottom: 3px solid black;
  padding-bottom: 2px;
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
        TRAPPIST-1 is a unique solar system located about 40.66 light-years away from Earth, in the constellation Aquarius. It is home to a small, ultracool dwarf star that is much smaller and cooler than our Sun, with only about 8% of the Sun's mass. Despite its dim light and small size, this system has captured the attention of scientists worldwide because it contains seven Earth-sized exoplanets, all packed tightly in orbit around the star. These planets, designated from TRAPPIST-1b to TRAPPIST-1h, orbit their star much more closely than any of the planets in our solar system orbit the Sun.
    </>,
    <>
        What makes TRAPPIST-1 especially exciting is that three of its planets—TRAPPIST-1e, TRAPPIST-1f, and TRAPPIST-1g—are located in the star's "habitable zone," the region where conditions might be just right for liquid water to exist. Liquid water is one of the key ingredients for life as we know it, which raises the exciting possibility that these planets could harbor life or be possible candidates for future human exploration.
    </>,
];

const SystemPage: React.FC = () => {
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
                <Header><GameText>Welcome to the TRAPPIST-1 Solar System!</GameText></Header>
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
                        <Iframe src="https://eyes.nasa.gov/apps/exo/#/system/TRAPPIST-1" />
                    </Card>
                </ContentContainer>
                {ended && (
                    <NextButton
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.location.href = '/transition:arriving'}
                    >
                        Next
                    </NextButton>
                )}
            </PageContainer>
        </AnimatePresence>
    );
};

export default SystemPage;
