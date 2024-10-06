import React, {useState} from 'react';
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
import hydrothermalVentImage from '../../assets/images/hydrothermal-vent.jpg';
import riftiaImage from '../../assets/images/riftia.jpg';
import bacteriaImage from '../../assets/images/bacteria.jpg';
import {useNavigate} from "react-router-dom";
import ScrollIndicator from "../atoms/ScrollIndicator";
import ScrollIndicatorV2 from "../atoms/ScrollIndicatorV2";

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
  linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1) );
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
  linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2) );
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
  linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3) );
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
  linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
  background-size: cover;
  background-blend-mode: overlay;
`;

const IceImage6 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: url(${iceImage2}),
  linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));
  background-size: cover;
  background-blend-mode: overlay;
`;


const IceImage7 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: url(${iceImage2}),
  linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6));
  background-size: cover;
  background-blend-mode: overlay;
`;

const IceImage8 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: url(${iceImage2}),
  linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7));
  background-size: cover;
  background-blend-mode: overlay;
`;

const IceImage9 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: url(${iceImage2}),
  linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
  background-size: cover;
  background-blend-mode: overlay;
`;

const IceImage10 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: url(${iceImage2}),
  linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1));
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

const GameHeader = styled(motion.h2)`
  font-family: "Press Start 2P", "Montserrat", serif;
`;

const GameText = styled(motion.span)`
  font-family: "Press Start 2P", "Montserrat", serif;
  font-size: 11px;
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
    const navigate = useNavigate()
    const [showScroll, setShowScroll] = useState(true);
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const probe = document.getElementById('probe') as HTMLElement;

        if (probe) {
            const scrollFactor = 0.1;
            const newY = scrollY * scrollFactor;
            probe.style.transform = `translateY(${newY}px)`;
        }

        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        if (scrollY >= maxScroll - (window.innerHeight * 0.45)) {
            setShowScroll(false)
        } else {
            setShowScroll(true)
        }
    };

    const handleNextClick = () => {
        navigate("/game")
    };

    const handleScrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
        <PageContainer>
            {showScroll && (<ScrollIndicatorV2 onClick={handleScrollDown}/>)}
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
                        <GameHeader>Life Powered by Light - Photosynthesis</GameHeader>
                        <br/>
                        <br/>
                        On Earth, most life forms rely on <GameText>photosynthesis</GameText>, a process where plants, algae, and some bacteria convert sunlight into food. In this process, <GameText>chlorophyll</GameText> captures light energy and transforms carbon dioxide and water into oxygen and glucose, a form of sugar that fuels their growth. This system not only sustains the organisms that perform photosynthesis but also supports entire ecosystems by providing energy and oxygen to a vast array of living beings, from plants to animals.
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
                        <GameHeader>Into the Depths – No Light, No Photosynthesis</GameHeader>
                        <br/>
                        <br/>
                        As we journey beneath 40 kilometers of ice on an alien planet, we encounter a hidden ocean where sunlight cannot reach. In this cold, dark environment, <GameText>photosynthesis is impossible</GameText>, leaving us to question how life could survive in such extreme conditions.
                        <br/>
                        <br/>
                        Without sunlight as an energy source, what alternative forms of life could exist?
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
                        <GameHeader>Chemosynthesis – Life Powered by Chemistry</GameHeader>
                        <br/>
                        <br/>
                        On Earth, there is a surprising answer to life without sunlight: <GameText>chemosynthesis</GameText>. In the deep oceans, near hydrothermal vents, certain bacteria use <GameText>chemical reactions</GameText> instead of sunlight to produce energy. These bacteria rely on chemicals like <GameText>hydrogen sulfide</GameText> or <GameText>methane</GameText> that are released from the Earth’s crust through volcanic activity.
                        <br/>
                        <br/>
                        Instead of absorbing sunlight, these bacteria take in chemicals from the water and convert them into energy using a process called <GameText>oxidation</GameText>. This energy is then used to produce food, just like plants use light energy to create food during photosynthesis.
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
                        <GameHeader>Hydrothermal Vents – Geology and Life's Foundation</GameHeader>
                        <br/>
                        <br/>
                        Hydrothermal vents are remarkable geological formations found deep on the ocean floor, usually along mid-ocean ridges where tectonic plates are moving apart. As these plates separate, cracks in the Earth's crust allow seawater to seep down and interact with magma.
                        <br/>
                        <br/>
                        This process superheats the water, which can reach temperatures of up to <GameText>400°C</GameText>, causing it to rise back to the surface. The superheated water carries dissolved minerals like hydrogen sulfide (H₂S), methane, and various metals. When this hot, mineral-rich water meets the cold ocean water, it creates towering vent chimneys and releases plumes of chemicals.
                        <StyledImage src={hydrothermalVentImage} alt="Styled Image" />
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
                        <GameHeader>Hydrothermal Vent Plumes and Chemosynthetic Life</GameHeader>
                        <br/>
                        <br/>
                        When the hot, mineral-rich water from the hydrothermal vents meets the cold ocean water, it creates towering vent chimneys and releases plumes of chemicals. These vents provide a continuous supply of chemicals that support unique ecosystems.
                        <br/>
                        <br/>
                        Despite the incredibly harsh conditions near hydrothermal vents, life not only exists but flourishes here. These deep-sea environments are characterized by high pressure, extreme temperatures, toxic chemicals (the vents emit hydrogen sulfide (H₂S), which is highly toxic to most known life forms), and complete darkness.
                        <br/>
                        <br/>
                        Yet, despite all that, unique ecosystems have developed around these vents. Bacteria living near the vents use H₂S and other chemicals through a process called chemosynthesis to produce energy. These bacteria form the base of the food chain, supporting diverse life forms such as giant tube worms, clams, and crabs.
                        <StyledImage src={hydrothermalImage} alt="Styled Image" />
                        <StyledCaption>Source: https://www.wikidata.org/wiki/Q1905964</StyledCaption>
                    </TextCard>
                </GifContainer>
            </Section>
            <Section>
                <GifContainer>
                    <IceImage6
                    />
                    <TextCard
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <GameHeader>The Marvelous Giant Tube Worms</GameHeader>
                        <br/>
                        <br/>
                        <GameText>Giant tube</GameText> worms (Riftia pachyptila) are extraordinary creatures living near hydrothermal vents deep in the ocean. They can grow over 2 meters long and have no mouth, stomach, or digestive system! Instead, they rely on a unique way to get their nutrients.
                        <br/>
                        <br/>
                        These worms have a bright red plume at their top, which is rich in blood vessels. This plume absorbs chemicals like hydrogen sulfide (H₂S), carbon dioxide (CO₂), and oxygen (O₂) from the surrounding water.
                        <StyledImage src={riftiaImage} alt="Styled Image" />
                        <StyledCaption>Source: https://en.m.wikipedia.org/wiki/File:Riftia_tube_worms_Galapagos_2011.jpg</StyledCaption>
                    </TextCard>
                </GifContainer>
            </Section>
            <Section>
                <GifContainer>
                    <IceImage7
                    />
                    <TextCard
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <GameHeader>A Symbiotic Partnership – Worms and Bacteria</GameHeader>
                        <br/>
                        <br/>
                        Inside the giant tube worm's body is a special organ called the trophosome, which houses billions of chemosynthetic bacteria. This relationship is called symbiosis, where two different organisms live closely together, benefiting each other.
                        <br/>
                        <br/>
                        How it works:
                        <br/>
                        <br/>
                        The worm provides the bacteria with H₂S, CO₂, and O₂ absorbed from the water.
                        <br/>
                        <br/>
                        The bacteria use these chemicals to perform chemosynthesis, producing organic nutrients.
                        <br/>
                        <br/>
                        The worm uses these nutrients for energy and growth.
                        <br/>
                        <br/>
                        This partnership allows the worm to thrive without eating; the bacteria do the food-making for them!
                        <StyledImage src={bacteriaImage} alt="Styled Image" />
                        <StyledCaption>Source: https://en.wikipedia.org/wiki/Bacteria#/media/File:E._coli_Bacteria_(7316101966).jpg</StyledCaption>
                    </TextCard>
                </GifContainer>
            </Section>
            <Section>
                <GifContainer>
                    <IceImage8
                    />
                    <TextCard
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <GameHeader>Energy Production – Bacteria Turning Chemicals into Fuel</GameHeader>
                        <br/>
                        <br/>
                        More details on the process:
                        <br/>
                        <br/>
                        <GameText>Oxidation of Hydrogen Sulfide:</GameText> The bacteria use oxygen (O₂) to oxidize H₂S, converting it into sulfate (SO₄²⁻). This chemical reaction releases energy.
                        <br/>
                        <br/>
                        <GameText>Chemical Reaction:</GameText>

                        <GameText>Production of ATP:</GameText>
                        <br/>
                        <br/>
                        The energy released from this reaction is used to produce ATP (adenosine triphosphate), which is like a rechargeable battery that stores energy for cells.
                        Carbon Fixation: Using the energy stored in ATP, the bacteria convert carbon dioxide (CO₂) into organic molecules (like glucose) that serve as food.
                        <GameText>Chemical Reaction:</GameText>

                        <GameText>Why This Matters:</GameText>
                        <br/>
                        <br/>
                        Energy for the Worm and Bacteria: Both organisms benefit—the bacteria get a safe home and raw materials, while the worm gets the nutrients it needs to live.
                        Sustaining Life Without Sunlight: This energy production allows life to thrive in complete darkness, showing that organisms can adapt to extreme environments.
                    </TextCard>
                </GifContainer>
            </Section>
            <Section>
                <GifContainer>
                    <IceImage9
                    />
                    <TextCard
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <GameHeader>Tube Worms – A Vital Part of the Ecosystem</GameHeader>
                        <br/>
                        <br/>
                        Giant tube worms are not just fascinating on their own; they play a crucial role in their ecosystem. By converting chemicals from the vents into organic matter, they form a foundation of the food chain in these dark depths.
                        <br/>
                        <br/>
                        <GameText>Predators:</GameText> Creatures like crabs, fish, and other deep-sea animals feed on tube worms.
                        <GameText>Ecosystem Support:</GameText> Their existence supports a diverse community of organisms that rely on them for food.
                        <GameText>Energy Flow:</GameText> The energy produced through chemosynthesis in tube worms and bacteria flows up the food chain, sustaining life in the deep ocean.
                        <br/>
                        <br/>
                        Despite living in harsh conditions, tube worms help create a thriving ecosystem teeming with life, the process of chemosynthesis providing its basal energy source.
                    </TextCard>
                </GifContainer>
            </Section>
            <Section>
                <GifContainer>
                    <IceImage10
                    />
                    <TextCard
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <GameHeader>Is chemosynthesis really that different from photosynthesis?</GameHeader>
                        <br/>
                        <br/>
                        The idea of giant worms that feed on toxic gases in the ocean's deepest depths might initially sound alien - something entirely different from life as we know it. However, evidence suggests that the evolution of chemosynthetic processes is very reminiscent of how photosynthesis surged closer to the surface.
                        <br/>
                        <br/>
                        In fact, chloroplasts, the organelles found in plant cells that enable photosynthesis, are also thought to have been born from a symbiotic relationship. They may have evolved from free-living photosynthetic bacteria (cyanobacteria) that entered into a symbiotic relationship with ancestral eukaryotic cells and, over time, became permanent residents within plant cells.
                        <br/>
                        <br/>
                        Photosynthesis or chemosynthesis, the fact is that <GameText>life finds a way</GameText> to thrive in all kinds of environments. So it is very plausible that distant exoplanets, particularly those containing liquid water,  might have forms of life.
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
