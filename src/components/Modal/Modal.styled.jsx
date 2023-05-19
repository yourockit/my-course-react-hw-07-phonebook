import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1200;
`;

export const ModalViewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.bg};
  width: 100vw;
  padding-top: calc(100vw - 95%);
  padding-bottom: calc(100vw - 95%);
  @media screen and (min-width: 480px) {
    width: 480px;
    margin: auto;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  color: ${theme.colors.font};
  font-weight: 400;
  margin: 0;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  padding-top: 30px;
`;
