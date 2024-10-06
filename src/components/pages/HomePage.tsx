import React, { useEffect } from 'react';
import "../../styles/HomePage.css";
import Card from '../atoms/Card';
import game from "../../assets/images/game.gif";
import ice from "../../assets/images/ice.gif";
import exoplanet from "../../assets/images/exoplanet.gif";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollIndicator from '../atoms/ScrollIndicator';
import {useNavigate} from "react-router-dom";
const NextButton = styled(motion.button)`
  margin-bottom: 2em;
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
const Introduction: React.FC = () => {
    const navigate = useNavigate()

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

    const start = () => {
        navigate("/news:past")
    }

    const handleScrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

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
                <ScrollIndicator onClick={handleScrollDown}/>
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
                            A spaceship sets off on an exciting mission to explore a distant exoplanet, searching for signs of alien life. The planet is covered in thick ice, but beneath it, a hidden ocean of liquid water awaits. Scientists on board believe strange life forms could be living down there, using chemical energy to survive, just like creatures found deep in Earth's oceans. With curiosity and hope, the crew prepares to drill through the ice and release robots into the mysterious water below. What secrets will they uncover in this icy, alien world? Could life really be out there, waiting to be found?
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
                        <img src={exoplanet} alt="Exoplanet Image" className="element-image" />
                        <p className='text-elements'>Go on a space mission based on the real exoplanet TRAPPIST-1 g!
                        </p>
                    </motion.div>
                    <motion.div
                        className='element-2'
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2.5 }}
                    >
                        <img src={ice} alt="Game Image" className="element-image" />
                        <p className='text-elements'>Learn about chemosynthesis, a whole new energy source for life!</p>
                    </motion.div>
                    <motion.div
                        className="element-3"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 3 }}
                    >
                        <img src={game} alt="Game Image" className="element-image" />
                        <p className='text-elements'>Watch evolution in motion with the help of genetic algorithms!</p>
                    </motion.div>
                </motion.div>
                <NextButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={start}
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
