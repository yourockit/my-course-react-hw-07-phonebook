import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';
import { motion } from 'framer-motion';

export const ContactListWrap = styled.div`
  padding-top: 100px;
`;

export const GroupContainer = styled.div`
  margin: 5px;
`;

export const GroupSymbol = styled.p`
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 32px;
  color: ${theme.colors.fontSecondary};
  background-color: ${theme.colors.bg};
  /* padding-left: 5px; */
  margin: 0;
`;

export const ContactsContainer = styled.ul`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 5px solid ${theme.colors.bg};
  &:last-child {
    border-bottom: none;
  }
  /* margin-top: 5px; */
`;

export const Contact = styled(motion.div)`
  display: flex;
  /* flex-direction: row; */
  /* align-items: center; */
  height: 40px;
  width: 100%;
  background-color: ${theme.colors.bgSecodary};
  /* border: 1px solid ${theme.colors.bgSecodary}; */
  border-radius: 8px;
  /* background-color: ${theme.colors.bgSecodary}; */
  padding: 0 0 10px 0;
  /* margin-top: 5px; */
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
  /* border-bottom: 2px solid ${theme.colors.bg}; */
  margin: 0 15px 0 15px;
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
