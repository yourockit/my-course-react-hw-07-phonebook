import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const ContactsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: hidden;
  padding: 0;
  padding-top: 120px;
  margin: 0;
`;

export const GroupSymbol = styled.p`
  display: flex;
  align-items: center;
  height: 55px;
  width: 55px;
  background-color: ${theme.colors.bgSecodary};
  margin: 0;
  margin-bottom: 5px;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 5px solid ${theme.colors.bg};
  &:last-child {
    border-bottom: none;
  }
`;

export const Contact = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  background-color: ${theme.colors.bgSecodary};
  border-radius: 8px;
  padding: 0 0 10px 0;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 200ms;
`;

export const ContactSymbol = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: ${theme.colors.bg};
  border-radius: 0 0 8px 8px;
  font-size: 32px;
  font-weight: bold;
  color: ${theme.colors.font};
  margin: 0;
  margin-left: 15px;
`;

export const Name = styled.p`
  display: flex;
  align-items: end;
  overflow: hidden;
  width: calc(100% - 100px);
  height: 35px;
  font-size: 18px;
  font-weight: 400;
  color: ${theme.colors.font};
  margin: 0 15px 0 15px;
`;
