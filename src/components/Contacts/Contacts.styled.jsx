import styled from '@emotion/styled';
import { ReactComponent as IconAdd } from '../../svg/plus.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ControlWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Control = styled.div`
  display: flex;
  max-width: 480px;
  margin: auto;
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
  margin-top: 80px;
`;
