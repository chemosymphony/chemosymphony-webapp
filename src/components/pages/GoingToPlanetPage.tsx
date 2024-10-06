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
  top: 50%;
  left: 0;
  width: 100px;
  height: auto;
  transform: translateY(-50%);
`;

const Planet = styled(motion.img)`
  position: absolute;
  top: 50%;
  right: 100px;
  width: 150px;
  height: auto;
  transform: translateY(-50%);
  z-index: 1;
`;

const Blackout = styled(motion.div)`
  position: absolute;
  top: 50%;
  right: 20px;
  width: 100vw;
  height: 100vh;
  background-color: black;
  clip-path: circle(0% at 85% 50%);
  z-index: 10;
  transform: translateY(-50%);
`;

const TransitionPage: React.FC = () => {
    const [showBlackout, setShowBlackout] = useState(false);
    const navigate = useNavigate(); // Hook para redirecionar

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBlackout(true);
        }, 5000); // 5 seconds for the satellite to reach the planet

        // Limpa o timer
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showBlackout) {
            // Redireciona após o Blackout (2 segundos depois da animação)
            const redirectTimer = setTimeout(() => {
                navigate('/ice'); // Altere para a página desejada
            }, 2000); // Sincronizado com a duração do Blackout

            return () => clearTimeout(redirectTimer); // Limpa o timer
        }
    }, [showBlackout, navigate]);

    return (
        <PageContainer>
            <Satellite
                src={satelliteGif}
                alt="Satélite"
                initial={{ x: '0' }}
                animate={{ x: 'calc(100vw - 170px)' }}
                transition={{ duration: 5, ease: 'linear' }}
            />
            <Planet
                src={planetImage}
                alt="Planeta"
                initial={{ scale: 1 }}
                animate={{ scale: 1.5 }} // Aumenta o planeta durante a animação
                transition={{ duration: 5, ease: 'linear' }} // Sincroniza com o satélite
            />
            <AnimatePresence>
                {showBlackout && (
                    <Blackout
                        initial={{ clipPath: 'circle(0% at 85% 50%)' }}
                        animate={{ clipPath: 'circle(150% at 85% 50%)' }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                    />
                )}
            </AnimatePresence>
        </PageContainer>
    );
};

export default TransitionPage;
