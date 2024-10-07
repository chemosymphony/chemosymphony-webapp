import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/chemonews.png';
// @ts-ignore
import newsImage from '../../assets/images/news_old.jpeg';
// @ts-ignore
import gabrielImage from '../../assets/images/freitas.png';
import gustavoImage from '../../assets/images/gustavo.png';

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: url("/assets/images/news-bg.png");
  padding-bottom: 20px;
  position: relative;
`;
const Header = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: #0e0e0e;
  color: white;
  height: 150px;
`;
const Logo = styled(motion.img)`
  width: auto;
  height: 100px;
  margin-right: 20px;
`;
const Title = styled(motion.h1)`
  font-size: 24px;
  font-family: "Montserrat", serif;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  height: 100vh;
  max-height: calc(100vh - 200px);
`;
const Content = styled(motion.div)`
  max-width: 800px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 100px); /* Limite máximo de altura */
  overflow-y: auto; /* Permite rolagem se o conteúdo exceder a altura */
`;
const Comments = styled(motion.div)`
  max-width: 350px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 100px); /* Limite máximo de altura */
  overflow-y: auto; /* Permite rolagem se o conteúdo exceder a altura */
`;
const Headline = styled(motion.h2)`
  font-size: 22px;
  margin-bottom: 10px;
  font-family: "Montserrat", serif;
`;
const Date = styled(motion.p)`
  font-size: 14px;
  color: gray;
  margin-bottom: 20px;
  font-family: "Montserrat", serif;
`;
const Text = styled(motion.div)`
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 20px;
  font-family: "Montserrat", serif;
  text-align: justify;
`;
const Image = styled(motion.img)`
  width: 100%;
  border-radius: 10px;
`;
const Comment = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
const CommentText = styled.div`
  flex: 1;
  font-size: 13px;
  font-family: "Montserrat", serif;
`;
const Star = styled.span`
  color: gold;
  font-size: 20px;
  margin-left: 10px;
`;
const NextButton = styled(motion.button)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  text-transform: uppercase;
  font-family: "Press Start 2P", "Montserrat", serif;
  padding: 30px 50px;
  font-size: 32px;
  background-color: #0e0e0e;
  color: white;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const GameText = styled(motion.p)`
  font-family: "Press Start 2P", "Montserrat", serif;
`;

const NewsPastPage: React.FC = () => {
    const navigate = useNavigate();
    const [isExiting, setIsExiting] = useState(false);
    const handleNext = () => {
        setIsExiting(true);
    };
    return (
        <AnimatePresence>
            {!isExiting && (
                <PageContainer
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Header
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Logo
                            src={logo}
                            alt="Logo"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </Header>
                    <ContentContainer>
                        <Content
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <Headline
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <GameText style={{ fontSize: "24px" }}>Europa Clipper Launches Today, Eyes on the Icy Moon's Hidden Ocean</GameText>
                            </Headline>
                            <Date
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                            >
                                October 10th, 2024
                            </Date>
                            <Text
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 2 }}
                            >
                                NASA's Europa Clipper spacecraft has just launched on an exciting journey to explore Jupiter's moon, Europa. Scientists believe that beneath Europa's thick icy surface lies a vast ocean of liquid water, making it one of the most promising places to look for life beyond Earth.
                                <br/>
                                <br/>
                                <GameText style={{ fontSize: "12px" }}>What Will Europa Clipper Do?</GameText>
                                <br/>
                                <br/>
                                The Europa Clipper will travel nearly 1.8 billion miles (2.9 billion kilometers) to reach Jupiter in April 2030. Instead of orbiting Europa directly, the spacecraft will orbit Jupiter and make almost 50 close flybys of Europa. During each flyby, it will spend only a short time near Europa to avoid Jupiter's intense radiation.
                                <br/>
                                <br/>
                                Equipped with nine scientific instruments, the Europa Clipper will:
                                <br/>
                                <br/>
                                <GameText style={{ fontSize:"9px" }}>Scan Europa's Icy Surface:</GameText> Using special cameras and ice-penetrating radar to create detailed maps.
                                <GameText style={{ fontSize:"9px" }}>Investigate the Subsurface Ocean:</GameText> Searching for signs of liquid water beneath the ice.
                                <GameText style={{ fontSize:"9px" }}>Analyze the Atmosphere:</GameText> Studying the thin layer of gases surrounding Europa.
                                <br/>
                                <br/>
                                <GameText style={{ fontSize:"12px" }}>Why Is This Mission Important?</GameText>
                                <br/>
                                <br/>
                                This mission is a big step toward answering one of humanity's most profound questions: Could life exist elsewhere in our solar system? By studying Europa's potential to support life, we can better understand the possibilities of finding living organisms beyond Earth.

                            </Text>
                            <Image
                                src={newsImage}
                                alt="Notícia"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 2.5 }}
                            />
                        </Content>
                        <Comments
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <Headline>
                              <GameText style={{ fontSize:"15px" }}>Comments</GameText>
                            </Headline>
                            <Comment>
                                <UserImage src={gabrielImage} alt="User" />
                                <CommentText>
                                    Great article! Very informative.
                                </CommentText>
                                <Star>★</Star>
                            </Comment>
                            <Comment>
                                <UserImage src={gustavoImage} alt="User" />
                                <CommentText>
                                    Can't wait to see what they discover!
                                </CommentText>
                                <Star>★</Star>
                            </Comment>
                        </Comments>
                    </ContentContainer>
                    <NextButton
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleNext}
                    >
                        Next
                    </NextButton>
                </PageContainer>
            )}
            {isExiting && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onAnimationComplete={() => navigate('/news:future')}
                />
            )}
        </AnimatePresence>
    );
};
export default NewsPastPage;