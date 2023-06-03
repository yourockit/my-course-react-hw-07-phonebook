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
  border-radius: 2px;
  background-color: ${theme.colors.blue};
  -webkit-tap-highlight-color: transparent;
  transition: background-color 50ms, box-shadow 50ms;
  &:hover,
  &:active {
    cursor: pointer;
    background-color: ${theme.colors.blueHover};
  }
  @media screen and (min-width: ${theme.width.desktop}) {
    width: 80px;
  }
`;
