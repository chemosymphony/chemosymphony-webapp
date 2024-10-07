// src/CreditsPage.js

import React from 'react';
import "../../styles/Credits.css";
import home from "../../assets/images/home.png"
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {motion} from "framer-motion";

const NextButton = styled(motion.button)`
  position: absolute;
  top: 1em;
  left: 1em;
  text-transform: uppercase;
  font-family: "Press Start 2P", "Montserrat", serif;
  padding: 30px 50px;
  font-size: 24px;
  background-color: white;
  color: #0e0e0e;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CreditsPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className="credits-page">
            <NextButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate('/game')}
            >
                Return to the game
            </NextButton>
            <h1 className="credits-title">CREDITS</h1>
            <div className="credits-content">
                <section className="credits-section">
                <br/>
                <h2>Team</h2>
                    <br/>
                    <ul>
                        <li><strong>Gabriel Freitas Pinheiro - @freitaspinhe (Instagram)</strong></li>
                        <br/>
                        <li><strong>Duda Bauermann Cremm</strong> - @dudacremmf (Instagram)</li>
                        <br/>
                        <li><strong>Lucas Gabriel Monteiro da Costa - @lucasg.fregolent (Instagram)</strong></li>
                        <br/>
                        <li><strong>Gustavo Ferreira Gitzel</strong> - @gustavogitzel (Instagram)</li>
                        <br/>
                        <li><strong>Pietro Grazzioli Golfeto - @pietrogolfeto (Instagram)</strong></li>
                        <br/>
                        <li><strong>Gustavo Morais</strong> - @moraguma (Twitter)</li>
                </ul>
                </section>
            </div>
            <div className='home-container' onClick={() => navigate("/home")}>
                <img src={home} alt="HOME" className='go-home' />
                <p>Return Home</p>
            </div>
        </div>
    );
    };

export default CreditsPage;
