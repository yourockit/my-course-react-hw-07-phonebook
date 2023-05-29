import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';
import { ContainerDesctop } from './AppDesctop.styled';

export const AppWrap = styled.main`
  background-color: ${theme.colors.bg};
`;

export const Container = styled.div`
  background-color: ${theme.colors.bg};
  min-height: 100vh;
  ${ContainerDesctop}
`;
