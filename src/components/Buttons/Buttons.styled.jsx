import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const BtnAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${theme.colors.fontSecondary};
  border: none;
  border-radius: 50%;
  background-color: ${theme.colors.base};
  -webkit-tap-highlight-color: transparent;
  &:hover,
  &:active {
    cursor: pointer;
    /* color: ${theme.colors.btnAdd}; */
    background-color: ${theme.colors.btnAdd};
  }
`;

export const BtnEdit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${theme.colors.fontSecondary};
  border: none;
  border-radius: 50%;
  background-color: ${theme.colors.base};
  -webkit-tap-highlight-color: transparent;
  &:hover,
  &:active {
    cursor: pointer;
    /* color: ${theme.colors.btnEdit}; */
    background-color: ${theme.colors.btnEdit};
  }
`;

export const BtnDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${theme.colors.fontSecondary};
  border: none;
  border-radius: 50%;
  background-color: ${theme.colors.base};
  -webkit-tap-highlight-color: transparent;
  &:hover,
  &:active {
    cursor: pointer;
    /* color: ${theme.colors.btnDelete}; */
    background-color: ${theme.colors.btnDelete};
  }
`;
