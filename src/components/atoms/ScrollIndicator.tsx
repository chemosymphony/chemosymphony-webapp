import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ScrollIndicatorProps {
    onClick: () => void;
}

const ScrollIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
  bottom: 150px;
  text-align: center;
`;

const Arrow = styled(motion.div)`
  font-size: 48px;
  margin: 5px;
  text-align: center;
  transform: rotate(90deg); /* Rotate to point downwards */
`;

const ScrollText = styled(motion.p)`
  font-size: 24px;
  text-align: center;
  margin-top: 5px;
  font-family: "Montserrat", serif;
`;

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ onClick }) => {
    return (
        <ScrollIndicatorContainer onClick={onClick}>
            <ScrollText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
                Scroll down
            </ScrollText>
            <Arrow
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
            >
                ╲╱
            </Arrow>

        </ScrollIndicatorContainer>
    );
};

export default ScrollIndicator;
