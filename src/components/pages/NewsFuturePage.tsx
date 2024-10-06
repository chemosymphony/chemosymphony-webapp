import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/chemoshymphony.png';
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
  justify-content: left;
  width: 100%;
  padding: 20px;
  background-color: #c23616;
  color: white;
`;
const Logo = styled(motion.img)`
  width: 100px;
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
  background-color: #c23616;
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
                        <Title
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Space Apps News
                        </Title>
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
                                Europa Clipper Launches Today, Eyes on the Icy Moon's Hidden Ocean
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
                                <p>NASA's Europa Clipper is embarking on a journey to explore Jupiter's moon, Europa. The mission aims to investigate the possibility of life beneath Europa's icy crust, where a vast ocean may lie.</p>
                                <br/>
                                <p>The spacecraft will take five and a half years to reach Europa and, while not specifically searching for life, scientists expect the Clipper to reveal detailed data about Europa's surface and potential plumes of water, offering insights into the moon's habitability.</p>
                                <br/>
                                <p>This mission marks a major step toward answering one of humanity's most profound questions: could life exist elsewhere in our solar system?</p>
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
                                    <p>Great article! Very informative.</p>
                                </CommentText>
                                <Star>★</Star>
                            </Comment>
                            <Comment>
                                <UserImage src={userImage} alt="User" />
                                <CommentText>
                                    <p>Can't wait to see what they discover!</p>
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
                    onAnimationComplete={() => navigate('/planet')}
                />
            )}
        </AnimatePresence>
    );
};
export default NewsFuturePage;