import styled from '@emotion/styled';
import { ReactComponent as IconFind } from '../../svg/search.svg';
import { theme } from 'components/thems/theme';

export const Container = styled.label`
  display: flex;
  align-items: center;
  width: 60%;
  border-bottom: 2px solid ${theme.colors.bgSecodary};
  margin-left: 15px;
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

export const IconSearch = styled(IconFind)`
  width: 24px;
  height: 24px;
  border: none;
  fill: ${theme.colors.base};
`;
