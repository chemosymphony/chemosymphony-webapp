import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url("../../assets/images/Space.gif");
  color: white;
  padding: 20px;
  overflow: hidden;
`;

const TextCard = styled(motion.div)`
  flex: 1;
  background: white;
  color: black;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  font-family: "Montserrat", serif;
  text-align: justify;
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

const SystemPage: React.FC = () => {
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
                <TextCard variants={cardVariants}>
                    <h1>Welcome to the TRAPPIST-1 Solar System!</h1>
                    <p>
                        TRAPPIST-1 is a unique solar system located about 40 light-years away from Earth, in the constellation Aquarius. It is home to a small, ultracool dwarf star that is much smaller and cooler than our Sun, with only about 8% of the Sun's mass. Despite its dim light and small size, this system has captured the attention of scientists worldwide because it contains seven Earth-sized exoplanets, all packed tightly in orbit around the star. These planets, designated from TRAPPIST-1b to TRAPPIST-1h, orbit their star much more closely than any of the planets in our solar system orbit the Sun.

                    </p>
                </TextCard>
                <Card variants={cardVariants}>
                    <Iframe src="https://eyes.nasa.gov/apps/exo/#/system/TRAPPIST-1" />
                </Card>
            </PageContainer>
        </AnimatePresence>
    );
};

export default SystemPage;