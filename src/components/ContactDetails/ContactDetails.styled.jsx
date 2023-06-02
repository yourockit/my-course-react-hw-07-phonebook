import styled from '@emotion/styled';
import { ReactComponent as IconDelete } from '../../svg/bin.svg';
import { ReactComponent as IconEdit } from '../../svg/pencil.svg';
import { theme } from 'components/thems/theme';
import { motion } from 'framer-motion';

export const Details = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* background: ${theme.colors.bgContactDetails}; */
  /* backdrop-filter: blur(5px); */
  padding-left: 65px;
  @media screen and (min-width: ${theme.width.desktop}) {
    left: 0;
    bottom: 0;
    padding-left: 15px;
  }
`;

export const Phone = styled(motion.span)`
  font-size: 20px;
  color: ${theme.colors.white};
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Buttons = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  padding: 0 15px 15px 0;
`;

export const IconBtnDelete = styled(IconDelete)`
  width: 28px;
  height: 28px;
  border: none;
  fill: currentColor;
`;

export const IconBtnEdit = styled(IconEdit)`
  width: 28px;
  height: 28px;
  border: none;
  fill: currentColor;
`;
