import React from 'react';
// @ts-ignore
import Typing from 'react-typing-animation';
import styled from 'styled-components';

const TextContainer = styled.div`
  font-size: 24px;
  color: #fff;
  text-align: center;
  max-width: 600px;
  margin: 20px;
`;

interface AnimatedTextProps {
    onComplete: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ onComplete }) => {
    return (
        <TextContainer>
            <Typing speed={50} onFinishedTyping={onComplete}>
                <p>
                    A quimiossíntese é o processo pelo qual alguns organismos produzem energia através da oxidação de substâncias inorgânicas.
                </p>
            </Typing>
        </TextContainer>
    );
};

export default AnimatedText;
