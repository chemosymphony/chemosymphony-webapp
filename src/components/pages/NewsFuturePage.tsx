import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/chemonews.png';
// @ts-ignore
import newsImage from '../../assets/images/news_old.jpeg';
// @ts-ignore
import userImage from '../../assets/images/user.png';
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
  font-family: "Montserrat", serif;
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
                                Trappist Clipper Arrives to Investigate Life on TRAPPIST-1e
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
                                After an epic journey spanning 300 years, the *Trappist Clipper* has finally arrived at TRAPPIST-1e, a distant exoplanet located 40 light-years from Earth. This mission marks a monumental achievement in interstellar exploration, powered by the latest advancements in *laser propulsion* and *MagSail* technology, pushing the boundaries of human ingenuity.
                                <br/>
                                <br/>
                                The *Trappist Clipper* embarked on its voyage in the early 2100s, using a highly efficient *laser propulsion system* that accelerated the spacecraft to *0.2c*—20% of the speed of light. For the first 20 light-years of its journey, the probe coasted at this remarkable velocity, covering the vast distance faster than any spacecraft ever before. The laser sail was driven by Earth-based and space-based laser arrays, providing the initial thrust required to push the Clipper to interstellar speeds.
                                <br/>
                                <br/>
                                As the spacecraft neared the halfway point of its journey, the mission shifted into the next phase: *MagSail deceleration. The MagSail, a superconducting loop that generates a magnetic field, was deployed to interact with the sparse particles in the interstellar medium. This magnetic field created drag, gradually slowing the probe from **0.2c* to near-zero velocity over the remaining 20 light-years. This innovative technology allowed the spacecraft to decelerate without the need for fuel, ensuring it could safely approach TRAPPIST-1e and begin its mission.
                                <br/>
                                <br/>
                                TRAPPIST-1e, an Earth-sized exoplanet within the habitable zone of its star, has long been suspected of harboring liquid water beneath its icy surface. Scientists hope to uncover evidence of microbial life or complex ecosystems, similar to the hydrothermal vent communities found in Earth’s oceans. The Trappist Clipper, equipped with next-generation quantum sensors and autonomous probes, will scan the surface, ice layers, and potential subsurface oceans for signs of habitability and life.
                                <br/>
                                <br/>
                                This historic arrival not only symbolizes humanity's first steps toward exploring other star systems, but also answers the age-old question: what lies beyond our solar system? Over the coming months, the spacecraft will relay its findings back to Earth, where scientists eagerly await the first glimpse of TRAPPIST-1e’s secrets.
                                <br/>
                                <br/>
                                The next chapter in our quest to discover life in the universe begins today.
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
                                Comments
                            </Headline>
                            <Comment>
                                <UserImage src={userImage} alt="User" />
                                <CommentText>
                                    Great article! Very informative.
                                </CommentText>
                                <Star>★</Star>
                            </Comment>
                            <Comment>
                                <UserImage src={userImage} alt="User" />
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
                    onAnimationComplete={() => navigate('/travel')}
                />
            )}
        </AnimatePresence>
    );
};
export default NewsFuturePage;