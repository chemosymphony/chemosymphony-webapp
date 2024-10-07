import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/chemonews.png';
// @ts-ignore
import newsImage from '../../assets/images/planeta.png';
// @ts-ignore
import userImage from '../../assets/images/user.png';
import pietroImage from '../../assets/images/pietro.png';
import dudaImage from '../../assets/images/duda.png';
import lucasImage from '../../assets/images/lucas.png';
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
  height: 100vh;
  max-height: calc(100vh - 200px);
  max-width: 1200px;
  margin-top: 20px;
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
  text-align: justify;
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
  font-size: 24px;
  background-color: #0e0e0e;
  color: white;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PreviousChapter = styled(motion.button)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  text-transform: uppercase;
  font-family: "Press Start 2P", "Montserrat", serif;
  padding: 30px 50px;
  font-size: 24px;
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

const NewsFuturePage: React.FC = () => {
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
                                <GameText style={{ fontSize: "24px" }}>Voyage to the Frozen World: The Trappist Clipper's Epic Journey to TRAPPIST-1g</GameText>
                            </Headline>
                            <Date
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                            >
                                October 10th, 2424
                            </Date>
                            <Text
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 2 }}
                            >
                                After a breathtaking journey spanning 300 years, the Trappist Clipper has finally reached the mysterious world of TRAPPIST-1g, an exoplanet located 40.7 light-years away from Earth.
                                <br/>
                                <br/>
                                Launched in the early 2100s, the Clipper raced through interstellar space, journeying farther than any spacecraft before. Halfway through its journey, the spacecraft began to slow down, carefully adjusting its course toward its ultimate goal.
                                <br/>
                                <br/>
                                Awaiting the Clipper was TRAPPIST-1g, a planet covered in ice several kilometers deep. Beneath this frozen surface lies a vast ocean, a hidden world where life might exist in the darkness. Similar to the unique ecosystems found near Earth's deep-sea hydrothermal vents, these alien waters might harbor organisms that could change our understanding of life.
                                <br/>
                                <br/>
                                Equipped with advanced sensors and autonomous probes, the Trappist Clipper is ready to break through the icy shell. Its mission: to explore the ice layers, dive into the deep ocean, and search for signs of life—whether microscopic or more complex. Every discovery will bridge the vast distance back to Earth.
                                <br/>
                                <br/>
                                This bold expedition is more than a scientific mission; it's a story of exploration, courage, and the enduring human spirit. As the Clipper explores TRAPPIST-1g, people around the world hope to answer one of our oldest questions: Are we alone in the universe?
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
                                <UserImage src={userImage} alt="User" />
                                <CommentText>
                                The Trappist Clipper was propelled by an innovative laser sail system. Massive laser arrays on Earth and in orbit emitted powerful laser beams directed at a large, reflective sail attached to the spacecraft. This light pressure provided continuous acceleration, allowing the Clipper to reach speeds of up to 0.2c (20% the speed of light) over a relatively short period.
                                </CommentText>
                                <Star>★</Star>
                            </Comment>
                            <br/>
                            <br/>
                            <Comment>
                                <UserImage src={pietroImage} alt="User" />
                                <CommentText>
                                Despite traveling at such high speeds, the journey to TRAPPIST-1g took 300 years due to the immense distance of 40.7 light-years. For the first half of the journey, the spacecraft maintained its top speed. The second half involved gradual deceleration to ensure a safe arrival at the destination.
                                </CommentText>
                                <Star>★</Star>
                            </Comment>
                            <br/>
                            <br/>
                            <Comment>
                                <UserImage src={dudaImage} alt="User" />
                                <CommentText>
                                To decelerate without conventional fuel, the Clipper deployed a Magnetic Sail or MagSail. This consisted of a large superconducting loop generating a magnetic field. As the spacecraft moved through the interstellar medium, the magnetic field interacted with charged particles, creating a drag force that gradually slowed the spacecraft over the remaining distance.
                                </CommentText>
                                <Star>★</Star>
                            </Comment>
                            <br/>
                            <br/>
                            <Comment>
                                <UserImage src={lucasImage} alt="User" />
                                <CommentText>
                                The Clipper uses quantum entanglement for instant communication across vast distances. Pairs of entangled particles were prepared before the mission; one particle remained on Earth while its entangled partner traveled with the spacecraft. Changes observed in one particle are reflected in its entangled partner, allowing for instantaneous data transmission back to Earth.
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
                    <PreviousChapter
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate("/news:past")}
                    >
                        Previous
                    </PreviousChapter>
                </PageContainer>
            )}
            {isExiting && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onAnimationComplete={() => navigate('/travel')}
                />
            )}
        </AnimatePresence>
    );
};
export default NewsFuturePage;