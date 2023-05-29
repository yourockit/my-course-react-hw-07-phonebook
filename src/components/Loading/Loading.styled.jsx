import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';
import { motion } from 'framer-motion';

export const ContactListWrap = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  padding-top: 85px;
`;

export const ContactsGroup = styled(motion.li)`
  margin: 5px;
`;

export const ContactsContainer = styled.ul``;

export const GroupSymbolWrap = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

export const GroupSymbol = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 32px;
  width: 32px;
  background-color: ${theme.colors.bgSecodary};
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

export const ContactSymbol = styled(motion.p)`
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
