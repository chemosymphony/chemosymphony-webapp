import { motion } from 'framer-motion';
import styled from 'styled-components';

const PlayButton = styled(motion.button)`
  padding: 40px 80px; /* Aumentar o padding para um tamanho maior */
  font-size: 40px; /* Aumentar o tamanho da fonte */
  cursor: pointer;
  z-index: 10;
  background-color: #1e1e1e; /* Cor de fundo verde */
  border: 3px solid white; /* Cor da borda */
  text-transform: uppercase;
  border-radius: 10px; /* Borda mais arredondada */
  color: white; /* Cor do texto */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Sombreamento do texto */
  transition: transform 0.2s; /* Efeito de transição */

  font-family: 'Montserrat', sans-serif;
  font-weight: bolder; /* Peso Black */
  font-style: italic; /* Estilo Itálico */
`;

export default PlayButton;
