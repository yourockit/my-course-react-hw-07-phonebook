import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const AppWrap = styled.main`
  background-color: ${theme.colors.bg};
`;

export const Container = styled.div`
  padding: 15px;
  @media screen and (min-width: 480px) {
    width: 480px;
    margin: auto;
  }
`;
