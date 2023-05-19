import styled from '@emotion/styled';
import { ReactComponent as IconDelete } from '../../svg/bin.svg';
import { ReactComponent as IconEdit } from '../../svg/pencil.svg';
import { theme } from 'components/thems/theme';

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 120px;
  padding-left: 80px;
`;

export const Phone = styled.span`
  font-size: 24px;
  color: ${theme.colors.font};
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Buttons = styled.div`
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
