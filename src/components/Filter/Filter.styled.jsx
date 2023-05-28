import styled from '@emotion/styled';
import { ReactComponent as IconFind } from '../../svg/search.svg';
import { theme } from 'components/thems/theme';

export const Container = styled.label`
  display: flex;
  align-items: center;
  width: 250px;
  border-bottom: 2px solid ${theme.colors.bgSecodary};
  margin-left: 10px;
`;

export const Input = styled.input`
  font-size: 18px;
  height: 40px;
  border: none;
  padding-left: 5px;
  color: ${theme.colors.base};
  background-color: ${theme.colors.bg};
  &:active,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

export const IconSearch = styled(IconFind)`
  width: 20px;
  height: 20px;
  border: none;
  fill: ${theme.colors.base};
`;
