import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const Container = styled.div`
  position: fixed;
  width: 480px;
`;

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
  background-color: ${theme.colors.bgBtn};
  margin-top: 5px;
  -webkit-tap-highlight-color: transparent;
`;

export const SymbolWrap = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  margin-left: 15px;
  background-color: ${theme.colors.base};
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 24px;
  background-color: ${theme.colors.base};
  font-weight: 400;
  margin: 0;
`;
