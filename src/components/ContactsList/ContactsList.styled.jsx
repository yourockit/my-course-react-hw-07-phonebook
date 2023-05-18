import styled from '@emotion/styled';
import { ReactComponent as IconDelete } from '../../svg/cross.svg';
import { ReactComponent as IconEdit } from '../../svg/pencil.svg';
import { theme } from 'components/thems/theme';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Contact = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0;
  /* background-image: ${theme.colors.btn}; */
  background-color: ${theme.colors.bgBtn};
  margin-top: 5px;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 200ms;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: ${theme.colors.btnActive};
  }
`;

export const SymbolWrap = styled.div`
  border: none;
  margin-right: 15px;
  margin-left: 15px;
`;

export const Symbol = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 32px;
  font-weight: bold;
  color: ${theme.colors.font};
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: ${theme.colors.font};
  font-weight: 400;
  margin: 0;
`;

export const More = styled.div`
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
