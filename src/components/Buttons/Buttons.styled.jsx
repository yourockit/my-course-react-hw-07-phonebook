import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${theme.colors.fontSecondary};
  border: none;
  background-color: ${theme.colors.base};
  -webkit-tap-highlight-color: transparent;
  transition: background-color 200ms, box-shadow 200ms;
  &:hover,
  &:active {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
    background-color: ${theme.colors.btnActiveSecondary};
  }
`;