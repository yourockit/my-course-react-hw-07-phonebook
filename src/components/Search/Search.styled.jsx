import styled from '@emotion/styled';
import { ReactComponent as IconFind } from '../../svg/search.svg';
import { theme } from 'components/thems/theme';

export const Container = styled.label`
  display: flex;
  align-items: center;
  width: 60%;
  min-width: 240px;
  border-bottom: 2px solid ${theme.colors.grey};
`;

export const Input = styled.input`
  font-size: 18px;
  height: 40px;
  border: none;
  padding-left: 5px;
  color: ${theme.colors.grey};
  background-color: transparent;
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
  fill: ${theme.colors.white};
`;
