import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PlayButton from '../atoms/PlayButton';
import Background from '../atoms/Background';
import LogoImage from '../atoms/Logo';
import AnimatedText from '../atoms/AnimatedText';
import styled from 'styled-components';
import logo from '../../assets/images/chemoshymphony.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 20;
`;

const TextContainer = styled(motion.div)`
  position: absolute;
  top: 20%; /* 20% from the top */
  left: 20%; /* Adjust this as needed */
  z-index: 30; /* Ensure text is above the overlay */
  color: white; /* Change to your desired text color */
`;

interface LoadingPageProps {
    musicRef: React.RefObject<{ play: () => void }>;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ musicRef }) => {
    const [showLogo, setShowLogo] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [showText, setShowText] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const navigate = useNavigate();

    const handlePlay = () => {
        if (musicRef.current) {
            musicRef.current.play();
        }
        setShowButton(false);
        setTimeout(() => setShowLogo(true), 1000); // Delay to show logo after button fade out
    };

    const handleTextComplete = () => {
        setShowText(false);
        setShowOverlay(true);
        setTimeout(() => {
            navigate('/home');
        }, 2000);
    };

    return (
        <Container>
            <Background>
                <AnimatePresence>
                    {showButton && (
                        <PlayButton
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            onClick={handlePlay}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Start
                        </PlayButton>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {showLogo && (
                        <LogoImage
                            src={logo}
                            alt="Logo"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, delay: 1 }} // Delay to fade out logo
                            onAnimationComplete={() => {
                                setShowLogo(false);
                                // Delay before showing text
                                setTimeout(() => setShowText(true), 3000); // Adjust the delay as needed
                            }}
                        />
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {showText && (
                        <TextContainer
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }} // Fade in text
                        >
                            <AnimatedText onComplete={handleTextComplete} />
                        </TextContainer>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {showOverlay && (
                        <Overlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                        />
                    )}
                </AnimatePresence>
            </Background>
        </Container>
    );
};

export default LoadingPage;
