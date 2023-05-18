import styled from '@emotion/styled';
import { ReactComponent as IconAdd } from '../../svg/plus.svg';
import { theme } from 'components/thems/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 10px;
  z-index: 999;
`;

export const SearchWrap = styled.div`
  max-width: 480px;
  background-color: ${theme.colors.bgSecodary};
  box-shadow: 0 8px 8px 0px ${theme.colors.shadow};
  margin: auto;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${theme.colors.font};
  padding-top: 15px;
  margin: 0;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
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
  margin-top: 120px;
`;
