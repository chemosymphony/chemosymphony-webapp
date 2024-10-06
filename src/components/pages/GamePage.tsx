import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import spaceGif from '../../assets/images/Space.gif'
import {useNavigate} from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url("../../assets/images/Space.gif");
  color: white;
  padding: 20px;
`;

const IframeContainer = styled(motion.div)`
  width: 90%;
  max-width: 1200px;
  height: 80vh;
  border: 2px solid white;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const NextButton = styled(motion.button)`
  text-transform: uppercase;
  font-family: "Press Start 2P";
  padding: 20px 40px;
  font-size: 16px;
  background-color: white;
  color: #0e0e0e;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const GamePage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <PageContainer>
            <IframeContainer
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Iframe src="/games/index.html" title="Godot Game" />
            </IframeContainer>
            <NextButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate('/credits')}
            >
                Go to Credits
            </NextButton>
        </PageContainer>
    );
};

export default GamePage;
