import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import background1 from '../../assets/images/rocks.png'; // Imagem mais frontal
import background2 from '../../assets/images/hidroterma.png'; // Segunda camada
import background3 from '../../assets/images/middle.png'; // Terceira camada
import background4 from '../../assets/images/last.png'; // Quarta camada
import background5 from '../../assets/images/background.png'; // Camada mais profunda
import logo from '../../assets/images/chemoshymphony.png'; // Importe seu logo aqui

const HomePage: React.FC = () => {
    return (
        <Container
            initial={{ opacity: 0 }} // Começa invisível
            animate={{ opacity: 1 }} // Anima para visível
            exit={{ opacity: 0 }} // Opcional: animação de saída ao navegar para fora
            transition={{ duration: 5 }} // Duração da animação
        >
            {/* Logo centralizado na parte superior */}
            <Logo src={logo} alt="Logo" />

            <Layer style={{ backgroundImage: `url(${background5})` }} />
            <Layer style={{ backgroundImage: `url(${background4})` }} />
            <Layer style={{ backgroundImage: `url(${background3})` }} />
            <Layer style={{ backgroundImage: `url(${background2})` }} />
            <Layer style={{ backgroundImage: `url(${background1})` }} />
        </Container>
    );
};

// Estilização dos componentes
const Container = styled(motion.div)`
    position: relative;
    height: 100vh; /* Altura total da viewport */
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover; /* Cobre todo o contêiner */
  background-position: center; /* Centraliza a imagem */
  background-attachment: fixed; /* Efeito parallax */
`;

const Logo = styled.img`
  position: absolute; /* Posicionamento absoluto */
  top: 20px; /* Distância do topo */
  left: 50%; /* Alinha horizontalmente ao centro */
  transform: translateX(-50%); /* Centraliza a imagem com relação ao seu próprio eixo */
  width: 80%;
  z-index: 10; /* Garante que o logo fique acima das camadas de fundo */
`;

export default HomePage;
