import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: black;
  color: white;
  padding: 20px;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;
`;

const GamePage: React.FC = () => {
    return (
        <PageContainer>
            <Iframe src="/game/index.html" title="Godot Game" />
        </PageContainer>
    );
};

export default GamePage;
