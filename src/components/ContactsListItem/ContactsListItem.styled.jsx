import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const ContactsListWrap = styled.ul`
  padding-top: 130px;
  margin: 0;
`;

export const GroupContainer = styled.li`
  margin-left: 5px;
  margin-right: 5px;
  @media screen and (min-width: ${theme.width.desktop}) {
    margin: 0;
  }
`;

export const GroupSymbol = styled.p`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 60px;
  font-size: 32px;
  color: ${theme.colors.fontSecondary};
  background-color: ${theme.colors.bg};
  margin-right: 15px;
`;

export const ContactsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: ${theme.width.desktop}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    margin: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 5px solid ${theme.colors.bg};
  &:last-child {
    border-bottom: none;
  }
  @media screen and (min-width: ${theme.width.desktop}) {
    width: 270px;
    height: 160px;
    border: none;
    margin: 15px;
  }
`;

export const Contact = styled.div`
  display: flex;
  width: 100%;
  background-color: ${theme.colors.bgSecodary};
  border-radius: 8px;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 200ms;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: ${theme.colors.btnActive};
  }
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
  margin: 0 10px 10px 10px;
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: calc(100% - 100px);
  font-size: 18px;
  font-weight: 400;
  color: ${theme.colors.font};
  margin: 5px;
`;

export const Div = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 105px;
  width: 100%;
  background-color: ${theme.colors.bg};
  z-index: -1;
`;
