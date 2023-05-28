import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: ${theme.colors.secondary};
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.btn};
  -webkit-tap-highlight-color: transparent;
  transition: background-color 50ms, box-shadow 50ms;
  &:hover,
  &:active {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
    background-color: ${theme.colors.btnActiveSecondary};
  }
`;
