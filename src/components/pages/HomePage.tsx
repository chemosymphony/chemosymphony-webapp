import React, { useEffect } from 'react';
import "../../styles/HomePage.css";
import Card from '../atoms/Card';
import game from "../../assets/images/game.jpeg"

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
                <div className='content-wrapper'>
                    <Card
                        title='A great adventure awaits!'
                        text={
                            <p className='special-text'>
                                A spaceship sets off on an exciting mission to explore a distant exoplanet, searching for signs of alien life. The planet is covered in thick ice, but beneath it, a hidden ocean of liquid water awaits. Scientists on board believe strange life forms could be living down there, using chemical energy to survive, just like creatures found deep in Earth's oceans. With curiosity and hope, the crew prepares to drill through the ice and release robots into the mysterious water below. What secrets will they uncover in this icy, alien world? Could life really be out there, waiting to be found?
                            </p>
                        }
                    />
                    <p className='roadmap'>Our roadmap</p>
                    <div className='row-wrapper'>
                        
                        <div className='element-1'>
                            EXPLORE A NEW EXOPLANET!
                        </div>
                        <div className='element-2'>
                            KNOW MORE ABOUT CHEMOSYNTHESYS
                        </div>
                        <div className="element-3">
                            <img src={ game } alt="Game Image" className="element-image" />
                            <p className='text-elements'>Evolutionary game with genetic algorithm</p>
                        </div>

                    </div>
                    <div className='buttom'>
                        <p>aoshd ohas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
