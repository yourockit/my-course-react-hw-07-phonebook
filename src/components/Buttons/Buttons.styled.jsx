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
  border-radius: 50%;
  background-color: ${theme.colors.base};
  &:hover {
    cursor: pointer;
    color: ${theme.colors.secondary};
    opacity: 0.8;
  }
`;
