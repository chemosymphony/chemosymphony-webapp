import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import iceGif from '../../assets/images/ice_bg1.png';
// @ts-ignore
import probeImage from '../../assets/images/probe.gif';
// Caminho da nova imagem enviada
import iceImage2 from '../../assets/images/ice_bg2.png';

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

// Adicionando o filtro com degradê
const IceImage2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${iceImage2}),
  linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 50));
  background-size: cover;
  background-blend-mode: overlay;
`;

const TextCard = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProbeImage = styled.img`
  position: fixed;
  top: 10%;  /* A imagem começa a 10% do topo */
  left: 10%; /* A imagem começa a 10% da esquerda */
  width: 150px; /* Ajuste conforme o tamanho desejado */
  z-index: 100; /* Sobrepõe tudo no layout */
  transition: transform 0.2s ease-out;

  /* A função de transição será controlada por scroll */
`;

const IcePage: React.FC = () => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const probe = document.getElementById('probe') as HTMLElement;
        if (probe) {
            probe.style.transform = `translateY(${scrollY}px)`; // Move a imagem para baixo conforme o scroll
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <PageContainer>
            <ProbeImage id="probe" src={probeImage} alt="Probe Image" />
            <Section>
                <GifContainer>
                    <IceGif src={iceGif} alt="Ice GIF" />
                    <TextCard>
                        <h2>Primeira Seção</h2>
                        <p>Este é o texto da primeira seção. O GIF acima roda apenas uma vez.</p>
                    </TextCard>
                </GifContainer>
            </Section>
            <Section>
                <GifContainer>
                    <IceImage2 />
                    <TextCard>
                        <h2>Segunda Seção</h2>
                        <p>Este é o texto da segunda seção. A imagem acima é estática com um degradê aplicado.</p>
                    </TextCard>
                </GifContainer>
            </Section>
        </PageContainer>
    );
};

export default IcePage;
