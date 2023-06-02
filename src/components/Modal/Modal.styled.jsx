import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.blackTransparent};
  backdrop-filter: blur(8px);
  z-index: 999;
`;

export const ModalViewer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: initial;
  background-color: ${theme.colors.white};
  width: calc(100vw - 10%);
  padding-top: 15px;
  padding-bottom: 15px;
  @media screen and (min-width: 480px) {
    width: 450px;
    margin: auto;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  color: ${theme.colors.black};
  font-weight: 400;
  padding: 15px;
  margin: 0;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;
