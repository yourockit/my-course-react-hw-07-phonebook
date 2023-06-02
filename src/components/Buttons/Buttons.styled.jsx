import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: ${theme.colors.white};
  border: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 50ms, box-shadow 50ms;
  &:hover,
  &:active {
    cursor: pointer;
    background-color: ${theme.colors.blackTransparentHover};
  }
  @media screen and (min-width: ${theme.width.desktop}) {
    background-color: ${theme.colors.blackTransparent};
    width: 80px;
  }
`;
