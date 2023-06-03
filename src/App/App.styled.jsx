import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const Container = styled.main`
  /* position: relative; */
`;

export const Background = styled.div`
  position: fixed;
  opacity: 0.8;
  top: 0;
  left: 0;
  right: 0;
  bottom: -100px;
  background: ${theme.colors.gradient};
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const Content = styled.div`
  /* overflow: auto; */
  height: 100vh;
`;
