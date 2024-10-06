import React, { useEffect } from 'react';
import "../../styles/HomePage.css";
import Card from '../atoms/Card';
import game from "../../assets/images/game.jpeg";
import styled from 'styled-components';
import { motion } from 'framer-motion';
const NextButton = styled(motion.button)`
  margin-bottom: 2em;
  text-transform: uppercase;
  font-family: "Press Start 2P";
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
const Introduction: React.FC = () => {
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollPosition = window.pageYOffset;
                    const layer1 = document.querySelector('.layer5') as HTMLElement;
                    const layer2 = document.querySelector('.layer4') as HTMLElement;
                    const layer3 = document.querySelector('.layer3') as HTMLElement;
                    const layer4 = document.querySelector('.layer2') as HTMLElement;
                    const layer5 = document.querySelector('.layer1') as HTMLElement;
                    // Adjust the speed of the layers relative to the scroll position
                    if (layer1) layer1.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Slowest
                    if (layer2) layer2.style.transform = `translateY(${scrollPosition * 0.3}px)`;
                    if (layer3) layer3.style.transform = `translateY(${scrollPosition * 0.5}px)`;
                    if (layer4) layer4.style.transform = `translateY(${scrollPosition * 0.7}px)`;
                    if (layer5) layer5.style.transform = `translateY(${scrollPosition * 0.9}px)`; // Fastest
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='background-parallax'>
            {/* Parallax layers */}
            <div className='parallax-layer layer1'></div>
            <div className='parallax-layer layer2'></div>
            <div className='parallax-layer layer3'></div>
            <div className='parallax-layer layer4'></div>
            <div className='parallax-layer layer5'></div>
            {/* Your additional content goes here */}
            <div className="content">
                <motion.div
                    className='content-wrapper'
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Card
                        title='A great adventure awaits!'
                        text={
                            <p className='special-text'>
                                A spaceship sets off on an exciting mission to explore a distant exoplanet, searching for signs of life. The planet is covered by thick ice, but beneath it, a hidden ocean of liquid water awaits. Scientists on board believe strange life forms could be living down there, using chemical energy to survive, just like creatures found deep in Earth's oceans. With curiosity and hope, the crew prepares to drill through the ice and release robots into the mysterious water below. What secrets will they uncover in this icy world? Could life really be out there, waiting to be found?
                            </p>
                        }
                    />
                    <motion.p
                        className='roadmap'
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        Our roadmap
                    </motion.p>




                    5:57
                    <motion.div
                        className='row-wrapper'
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <motion.div
                            className='element-1'
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                        >
                            EXPLORE A NEW EXOPLANET!
                        </motion.div>
                        <motion.div
                            className='element-2'
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 2.5 }}
                        >
                            KNOW MORE ABOUT CHEMOSYNTHESYS
                        </motion.div>
                        <motion.div
                            className="element-3"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 3 }}
                        >
                            <img src={game} alt="Game Image" className="element-image" />
                            <p className='text-elements'>Evolutionary game with genetic algorithm</p>
                        </motion.div>
                    </motion.div>
                    <NextButton
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.location.href = '/news:past'}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 3.5 }}
                    >
                        START ADVENTURE
                    </NextButton>
                </motion.div>
            </div>
        </div>
    );
};
export default Introduction;
