import styled from '@emotion/styled';
import { ErrorMessage, Form } from 'formik';
import { ReactComponent as IconAdd } from '../../svg/checkmark.svg';
import { ReactComponent as IconCancel } from '../../svg/cross.svg';
import { theme } from 'components/thems/theme';
import { Field } from 'formik';

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.p`
  width: 90%;
  font-size: 18px;
  color: ${theme.colors.font};
  padding: 15px;
  margin: auto;
`;

export const Input = styled(Field)`
  width: 90%;
  font-size: 18px;
  height: 40px;
  padding: 0 0 0 5px;
  border: none;
  margin: auto;
  &:active,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;

export const ErrorWrap = styled.div`
  width: 90%;
  height: 20px;
  font-size: 16px;
  color: ${theme.colors.fontSecondary};
  padding: 5px 15px 0 15px;
  margin: auto;
`;

export const ErrorMsg = styled(ErrorMessage)``;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 15px;
`;

export const IconBtnAdd = styled(IconAdd)`
  width: 28px;
  height: 28px;
  border: none;
  fill: currentColor;
`;

export const IconBtnCancel = styled(IconCancel)`
  width: 28px;
  height: 28px;
  border: none;
  fill: currentColor;
`;
