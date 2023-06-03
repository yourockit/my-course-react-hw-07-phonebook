import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';

export const ContactsListWrap = styled.ul`
  padding-top: 100px;
  margin: 0;
`;

export const GroupContainer = styled.li`
  margin: 0 15px 0 10px;
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
  margin-right: 5px;
  color: ${theme.colors.grey};
  @media screen and (min-width: ${theme.width.desktop}) {
    margin-right: 15px;
  }
`;

export const ContactsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: ${theme.width.desktop}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: ${theme.width.desktop}) {
    height: 160px;
    width: 270px;
    border: none;
    margin: 15px;
  }
`;

export const Contact = styled.div`
  display: flex;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 200ms;
  border: 2px solid ${theme.colors.white};
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: ${theme.colors.whiteHover};
  }
  @media screen and (min-width: ${theme.width.desktop}) {
    height: 160px;
    &:hover {
      background-color: ${theme.colors.whiteHover};
    }
  }
`;

export const ContactSymbol = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 2px;
  background-color: ${theme.colors.blue};
  font-size: 32px;
  font-weight: bold;
  color: ${theme.colors.white};
`;

export const Name = styled.span`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: calc(100% - 50px);
  font-size: 18px;
  font-weight: 400;
  color: ${theme.colors.black};
  padding-left: 15px;
  @media screen and (min-width: ${theme.width.desktop}) {
    width: 190px;
    font-size: 20px;
  }
`;

export const Div = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 105px;
  width: 100%;
  z-index: -1;
  @media screen and (min-width: ${theme.width.desktop}) {
    display: none;
  }
`;
