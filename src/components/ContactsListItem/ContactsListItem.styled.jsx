import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';
import { motion } from 'framer-motion';

export const ContactListWrap = styled.div`
  padding-top: 100px;
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

export const GroupContainer = styled.div`
  background-color: ${theme.colors.bgSecodary};
  margin: 5px;
`;

export const GroupSymbol = styled.p`
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 32px;
  color: ${theme.colors.fontSecondary};
  background-color: ${theme.colors.bg};
  padding-left: 10px;
  margin: 0;
`;

export const ContactsContainer = styled.ul`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
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
  align-items: center;
  height: 40px;
  width: 100%;
  /* background-color: ${theme.colors.bgSecodary}; */
  padding: 0;
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
  font-size: 32px;
  font-weight: bold;
  color: ${theme.colors.font};
  margin: 0;
  margin-left: 15px;
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: calc(100% - 100px);
  height: 40px;
  font-size: 18px;
  font-weight: 400;
  color: ${theme.colors.font};
  /* border-bottom: 2px solid ${theme.colors.bg}; */
  margin: 0 15px 0 15px;
`;
