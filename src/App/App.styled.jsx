import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const AppWrap = styled.main`
  background-color: ${theme.colors.bg};
`;

export const Container = styled.div`
  background-color: ${theme.colors.bg};
  min-height: 100vh;
  @media screen and (min-width: ${theme.width.desktop}) {
    max-width: 1200px;
    margin: auto;
  }
`;
