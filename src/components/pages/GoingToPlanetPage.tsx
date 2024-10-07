import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Importação para redirecionamento
// @ts-ignore
import spaceGif from '../../assets/images/Space.gif';
// @ts-ignore
import satelliteGif from '../../assets/images/Europa_flipper.gif';
// @ts-ignore
import planetImage from '../../assets/images/trappistg.png';

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(${spaceGif}) no-repeat center center/cover;
  position: relative;
  overflow: hidden;
`;

const Satellite = styled(motion.img)`
  position: absolute;
  bottom: 200px; /* Ajusta a posição vertical */
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: auto;
  z-index: 2000;
  animation: orbit 2s linear infinite; /* Adiciona animação de órbita */
`;

const Planet = styled(motion.img)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px; /* Tamanho inicial do planeta */
  height: auto;
  transform: translate(-50%, -50%); /* Centraliza o planeta */
`;

const Blackout = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  clip-path: circle(0% at 50% 50%);
  z-index: 3000;
`;

const TransitionPage: React.FC = () => {
    const [showBlackout, setShowBlackout] = useState(false);
    const navigate = useNavigate(); // Hook para redirecionar

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBlackout(true);
        }, 5000); // Tempo para o satélite

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showBlackout) {
            const redirectTimer = setTimeout(() => {
                navigate('/cryobot'); // Altere para a página desejada
            }, 2000); // Sincronizado com a duração do Blackout

            return () => clearTimeout(redirectTimer);
        }
    }, [showBlackout, navigate]);

    return (
        <PageContainer>
            <Satellite
                src={satelliteGif}
                alt="Satélite"
                initial={{ x: '-10%' }}
                animate={{ x: ['-10%', '10%', '-10%'], scale: [1, 0.5] } } // Animação de movimento
                transition={{ duration: 7, ease: 'linear', repeat: Infinity }}
            />
            <Planet
                src={planetImage}
                alt="Planeta"
                initial={{ scale: 1 }} // Tamanho inicial do planeta
                animate={{ scale: [1, 5] }} // Cresce e depois retorna
                transition={{ duration: 5, ease: 'easeInOut' }} // Animação do crescimento
            />
            <AnimatePresence>
                {showBlackout && (
                    <Blackout
                        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                        animate={{ clipPath: 'circle(150% at 50% 50%)' }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                    />
                )}
            </AnimatePresence>
        </PageContainer>
    );
};

export default TransitionPage;
