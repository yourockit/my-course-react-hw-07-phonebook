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
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0;
  background-color: ${theme.colors.secondary};
  border-radius: 25px;
  margin-bottom: 15px;
  margin-top: 15px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 200ms;
  }
`;

export const SymbolWrap = styled.div`
  border: none;
  border-radius: 50%;
  background-color: ${theme.colors.base};
  margin-right: 15px;
`;

export const Symbol = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 32px;
  font-weight: bold;
  color: ${theme.colors.fontSecondary};
`;

export const Name = styled.h2`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${theme.colors.font};
  font-weight: 400;
  /* border-bottom: 1px solid ${theme.colors.base}; */
  margin: 0;
`;

export const More = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 90px;
  padding-left: 65px;
`;

export const Phone = styled.span`
  font-size: 24px;
  color: ${theme.colors.font};
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
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
