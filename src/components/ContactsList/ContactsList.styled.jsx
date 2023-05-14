import styled from '@emotion/styled';
import { ReactComponent as IconDelete } from '../../svg/cross.svg';
import { ReactComponent as IconEdit } from '../../svg/pencil.svg';

export const Contact = styled.div`
  display: flex;
  align-items: center;
  width: 450px;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const Item = styled.li`
  position: relative;
  margin-bottom: 15px;
`;

export const Symbol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 32px;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  background-color: green;
  padding: 0;
  margin: 0;
`;

export const Name = styled.h2`
  font-weight: 400;
  padding-left: 15px;
  margin: 0;
`;

export const More = styled.div`
  display: flex;
  align-items: center;
`;

export const Phone = styled.span`
  font-size: 24px;
  font-weight: bold;
  padding-left: 65px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-left: auto;
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
