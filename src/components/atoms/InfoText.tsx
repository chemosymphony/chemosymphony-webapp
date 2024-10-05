import { motion } from 'framer-motion';
import styled from 'styled-components';

const TextContainer = styled(motion.div)`
  font-size: 24px;
  color: #fff;
  text-align: center;
  max-width: 600px;
  margin: 20px;
`;

const InfoText: React.FC = () => {
    return (
        <TextContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            A quimiossíntese é o processo pelo qual alguns organismos produzem energia através da oxidação de substâncias inorgânicas.
        </TextContainer>
    );
};

export default InfoText;
