import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
// @ts-ignore
import Modal from 'react-modal';
// @ts-ignore
import spaceGif from '../../assets/images/Space.gif';

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

const ModalContent = styled(motion.div)`
  background: white;
  color: black;
  font-family: "Montserrat", serif;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const ModalButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0e0e0e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const GameText = styled(motion.p)`
  font-family: "Press Start 2P", "Montserrat", serif;
`;

const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.3 },
    },
};

const GamePage: React.FC = () => {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleConfirm = () => {
        closeModal();
        navigate('/credits');
    };

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
                onClick={openModal}
            >
                Go to Credits
            </NextButton>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Confirmation Modal"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'rgba(0, 0, 0, 0.8)',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '20px',
                        color: 'white',
                        textAlign: 'center',
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                }}
            >
                <ModalContent
                    variants={modalVariants}
                    initial="hidden"
                    animate={modalIsOpen ? "visible" : "hidden"}
                    exit="exit"
                >
                    <h2><GameText>Confirm Navigation</GameText></h2>
                    <p>Are you sure you want to go to the credits?</p>
                    <ModalButton onClick={handleConfirm}>Yes</ModalButton>
                    <ModalButton onClick={closeModal}>No</ModalButton>
                </ModalContent>
            </Modal>
        </PageContainer>
    );
};

export default GamePage;
