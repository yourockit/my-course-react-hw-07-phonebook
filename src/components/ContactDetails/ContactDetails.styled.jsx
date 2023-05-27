import styled from '@emotion/styled';
import { ReactComponent as IconDelete } from '../../svg/bin.svg';
import { ReactComponent as IconEdit } from '../../svg/pencil.svg';
import { theme } from 'components/thems/theme';
import { motion } from 'framer-motion';

export const Details = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.bg};
  max-height: auto;
  padding-left: 80px;
`;

export const Phone = styled(motion.span)`
  font-size: 24px;
  color: ${theme.colors.font};
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Buttons = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
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
