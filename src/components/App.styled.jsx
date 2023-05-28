import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const AppWrap = styled.main`
  background-color: ${theme.colors.bg};
`;

export const Container = styled.div`
  background-color: ${theme.colors.bg};
  min-height: 100vh;
  @media screen and (min-width: 480px) {
    width: 480px;
    /* box-shadow: -8px 0 8px 0 rgba(0, 0, 0, 0.2),
      8px 0 8px 0px rgba(0, 0, 0, 0.2); */
    margin: auto;
  }
`;
