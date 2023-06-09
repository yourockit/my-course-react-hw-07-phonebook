import styled from '@emotion/styled';
import { theme } from 'components/thems/theme';
import { motion } from 'framer-motion';

export const ContactListWrap = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  margin: 0;
`;

export const ContactsGroup = styled(motion.li)`
  margin: 0 15px 0 10px;
  @media screen and (min-width: ${theme.width.desktop}) {
    margin: 0;
  }
`;

export const ContactsContainer = styled.ul`
  @media screen and (min-width: ${theme.width.desktop}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
  }
`;

export const GroupSymbolWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 60px;
`;

export const GroupSymbol = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 32px;
  width: 32px;
  background-color: ${theme.colors.grey};
  margin-bottom: 5px;
  margin-right: 5px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
  &:last-child {
    border-bottom: 0;
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
  border: 2px solid ${theme.colors.white};
  border-radius: 4px;
  @media screen and (min-width: ${theme.width.desktop}) {
    height: 160px;
  }
`;

export const ContactSymbol = styled(motion.p)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: ${theme.colors.blue};
`;
