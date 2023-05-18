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
  transition: background-color 200ms;
  &:hover,
  &:active {
    cursor: pointer;
    color: ${theme.colors.btn};
    background-color: ${theme.colors.btnActiveSecondary};
  }
`;
