import styled from '@emotion/styled';
import { ReactComponent as IconOk } from '../../svg/checkmark.svg';
import { ReactComponent as IconCross } from '../../svg/cross.svg';
import { theme } from 'components/thems/theme';

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 15px;
`;

export const IconBtnOk = styled(IconOk)`
  width: 28px;
  height: 28px;
  border: none;
  fill: ${theme.colors.black};
`;

export const IconBtnCancel = styled(IconCross)`
  width: 28px;
  height: 28px;
  border: none;
  fill: ${theme.colors.black};
`;
