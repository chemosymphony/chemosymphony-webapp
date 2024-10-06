import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';
// @ts-ignore
import iceGif from '../../assets/images/ice_bg1.png';
// @ts-ignore
import probeImage from '../../assets/images/probe.gif';
// @ts-ignore
import iceImage2 from '../../assets/images/ice_bg2.png';
// @ts-ignore
import styledImage from '../../assets/images/photosynthesis.png';
import geoImage from '../../assets/images/geo.webp';
import chemosynthesisImage from '../../assets/images/chemosynthesis.jpg';
import hydrothermalImage from '../../assets/images/hydrothermal.jpg';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-y: auto;
  background-color: black;
  color: white;
  margin: 0;
  padding: 0;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
`;

const SectionEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  z-index: 101;
`;


const GifContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const IceGif = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  animation: playOnce 5s linear forwards;
  @keyframes playOnce {
    0% { opacity: 1; }
    100% { opacity: 1; }
  }
`;

const IceImage2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: url(${iceImage2}),
  linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.25) );
  background-size: cover;
  background-blend-mode: overlay;
`;

const IceImage3 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: url(${iceImage2}),
  linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5) );
  background-size: cover;
  background-blend-mode: overlay;
`;

const IceImage4 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: url(${iceImage2}),
  linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75) );
  background-size: cover;
  background-blend-mode: overlay;
`;

const IceImage5 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: url(${iceImage2}),
  linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1));
  background-size: cover;
  background-blend-mode: overlay;
`;

const TextCard = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: white;
  font-family: "Montserrat", serif;
  align-content: center;
  color: black;
  padding: 20px;
  border-radius: 10px;
  max-width: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: justify;
`;

const StyledImage = styled(motion.img)`
  display: flex;
  width: 300px;
  margin-top: 1em;
  height: auto;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  border-radius: 10px;
  animation: bounce 2s ;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const StyledCaption = styled.p`
  margin-top: 10px;
  font-size: 12px;
  text-align: center;
  color: #b0b0b0;
`;

const ProbeImage = styled.img`
  position: fixed;
  top: 10%;
  left: 10%;
  width: 150px;
  z-index: 100;
  transition: transform 0.2s ease-out;
`;

const NextButton = styled(motion.button)`
  position: relative;
  margin: 2em !important;
  bottom: 20px; // Ajuste o valor se necessário
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
  margin-top: 20px; // Espaçamento acima do botão
`;

const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const IcePage: React.FC = () => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const probe = document.getElementById('probe') as HTMLElement;

        if (probe) {
            const scrollFactor = 0.1;
            const newY = scrollY * scrollFactor;
            probe.style.transform = `translateY(${newY}px)`;
        }
    };

    const handleNextClick = () => {
        window.location.href = '/game'; // Redireciona para a página /game
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
        <PageContainer>
            <ProbeImage id="probe" src={probeImage} alt="Probe Image" />
            <Section>
                <GifContainer>
                    <IceGif src={iceGif} alt="Ice GIF" />
                    <TextCard
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <h2>Life Powered by Light - Photosynthesis</h2>
                        <p>On Earth, most life forms rely on photosynthesis, a process where plants, algae, and some bacteria convert sunlight into food. In this process, chlorophyll captures light energy and transforms carbon dioxide and water into oxygen and glucose, a form of sugar that fuels their growth. This system not only sustains the organisms that perform photosynthesis but also supports entire ecosystems by providing energy and oxygen to a vast array of living beings, from plants to animals.</p>
                        <StyledImage src={styledImage} alt="Styled Image" />
                        <StyledCaption>Source: https://en.wikipedia.org/wiki/Photosynthesis#/media/File:Photosynthesis_en.svg</StyledCaption>
                    </TextCard>
                </GifContainer>
            </Section>
            <Section>
                <GifContainer>
                    <IceImage2/>
                    <TextCard
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <h2>Into the Depths – No Light, No Photosynthesis</h2>
                        <p>As we journey beneath 40 kilometers of ice on an alien planet, we encounter a hidden ocean where sunlight cannot reach. In this cold, dark environment, photosynthesis is impossible, leaving us to question how life could survive in such extreme conditions. Without sunlight as an energy source, what alternative forms of life could exist?</p>
                        <StyledImage src={geoImage} alt="Styled Image" />
                        <StyledCaption>Source: https://www.nbcnews.com/id/wbna46605252</StyledCaption>
                    </TextCard>
                </GifContainer>
            </Section>
            <Section>
                <GifContainer>
                    <IceImage3/>
                    <TextCard
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <h2>Chemosynthesis – Life Powered by Chemistry</h2>
                        <br/>
                        <p>On Earth, there is a surprising answer to life without sunlight: chemosynthesis. In the deep oceans, near hydrothermal vents, certain bacteria use chemical reactions instead of sunlight to produce energy. These bacteria rely on chemicals like hydrogen sulfide or methane that are released from the Earth’s crust through volcanic activity. Instead of absorbing sunlight, these bacteria take in chemicals from the water and convert them into energy using a process called oxidation. This energy is then used to produce food, just like plants use light energy to create food during photosynthesis. <br/>
                            hydrogen sulfide chemosynthesis:<br/>
                            18H2S + 6CO2 + 3O2 → C6H12O6 + 12H2O + 18S + energia
                        </p>
                        <StyledImage src={chemosynthesisImage} alt="Styled Image" />
                        <StyledCaption>Source: https://en.wikipedia.org/wiki/Chemosynthesis</StyledCaption>
                    </TextCard>
                </GifContainer>
            </Section>
            <Section>
                <GifContainer>
                    <IceImage4/>
                    <TextCard
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <h2>Hydrothermal Vents – Geology and Life's Foundation</h2>
                        <br/>
                        Hydrothermal vents are geological formations found deep on the ocean floor, usually along mid-ocean ridges where tectonic plates are moving apart. They are characterized by the release of hot, mineral-rich water from the Earth’s crust. These vents serve as unique ecosystems, supporting a variety of life forms that thrive in extreme conditions without sunlight. <br/>
                        Many organisms, such as tube worms and certain types of shrimp, have adapted to these environments and rely on the bacteria that perform chemosynthesis for their energy needs. As a result, hydrothermal vents are considered some of the most fascinating and extreme habitats on Earth, proving that life can thrive in the most unexpected places.
                        <StyledImage src={hydrothermalImage} alt="Styled Image" />
                        <StyledCaption>Source: https://en.wikipedia.org/wiki/Hydrothermal_vent</StyledCaption>
                    </TextCard>
                </GifContainer>
            </Section>
            <Section>
                <GifContainer>
                    <IceImage5
                    />
                    <TextCard
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <h2>Hydrothermal Vent Plumes and Chemosynthetic Life</h2>
                        <br/>
                        When the hot, mineral-rich water from the hydrothermal vents meets the cold ocean water, it creates towering vent chimneys and releases plumes of chemicals. These vents provide a continuous supply of chemicals that support unique ecosystems.
                        <br/>
                        <br/>
                        Bacteria living near the vents use H₂S and other chemicals through chemosynthesis to produce energy, forming the base of the food chain and supporting life in these otherwise inhospitable, sunless environments.
                        <StyledImage src={hydrothermalImage} alt="Styled Image" />
                        <StyledCaption>Source: https://en.wikipedia.org/wiki/Hydrothermal_vent</StyledCaption>
                    </TextCard>
                </GifContainer>
            </Section>
            <SectionEnd>
                <NextButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNextClick}>
                    Start game
                </NextButton>
            </SectionEnd>

        </PageContainer>
        </AnimatePresence>
    );
};

export default IcePage;
