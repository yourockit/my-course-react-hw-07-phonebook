import styled from '@emotion/styled';
import { ReactComponent as IconAdd } from '../../svg/plus.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  border: 1px solid #c5c5c5;
  margin-right: auto;
  margin-left: auto;
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
