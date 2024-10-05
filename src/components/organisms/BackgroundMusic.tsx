import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import backgroundMusic from '../../assets/music/song.mp3';
import logo from '../../assets/images/chemoshymphony.png';

const PlayButton = styled(motion.button)`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  z-index: 10;
  background-color: #fff;
  border: none;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const LogoImage = styled(motion.img)`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

const BackgroundMusic: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [showLogo, setShowLogo] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
        setShowButton(false);
        setTimeout(() => setShowLogo(true), 1000); // Delay to show logo after button fade out
    };

    return (
        <Container>
            <AnimatePresence>
                {showButton && (
                    <PlayButton
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        onClick={handlePlay}
                    >
                        Play Music
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
                        onAnimationComplete={() => setShowLogo(false)} // Hide logo after animation
                    />
                )}
            </AnimatePresence>
            <audio ref={audioRef} loop>
                <source src={backgroundMusic} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </Container>
    );
};

export default BackgroundMusic;
