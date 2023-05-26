import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Contact = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0;
  background-color: ${theme.colors.bgSecodary};
  margin-top: 5px;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 200ms;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: ${theme.colors.btnActive};
  }
`;

export const SymbolWrap = styled.div`
  border: none;
  margin-right: 15px;
  margin-left: 15px;
`;

export const Symbol = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 32px;
  font-weight: bold;
  color: ${theme.colors.font};
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: ${theme.colors.font};
  font-weight: 400;
  margin: 0;
`;
