import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';
import { motion } from 'framer-motion';

export const ContactListWrap = styled.div`
  padding-top: 120px;
`;

export const GroupContainer = styled.div``;

export const ContactsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  height: 180px;
  width: calc((100% - 10px) / 2);
  margin-top: 5px;
`;

export const Contact = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.colors.bgSecodary};
  padding: 0;
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

export const SymbolWrap = styled.div``;

export const Symbol = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 42px;
  background-color: ${theme.colors.bg};
  font-size: 32px;
  font-weight: bold;
  color: ${theme.colors.font};
  margin-left: 15px;
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 100%;
  font-size: 18px;
  color: ${theme.colors.font};
  font-weight: 400;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0;
`;
