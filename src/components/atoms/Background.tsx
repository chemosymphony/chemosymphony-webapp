import React, { ReactNode } from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  background-image: url('/Space.gif');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

interface BackgroundProps {
    children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
    return <BackgroundContainer>{children}</BackgroundContainer>;
};

export default Background;
