import styled from '@emotion/styled';
import { ReactComponent as IconAdd } from '../../svg/plus.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Control = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const IconBtnAdd = styled(IconAdd)`
  width: 28px;
  height: 28px;
  border: none;
  fill: currentColor;
`;

export const ContactsWrap = styled.ul`
  margin: 0;
  padding: 0;
`;
