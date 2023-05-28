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
  z-index: 999;
`;

export const SearchWrap = styled.div`
  max-width: 480px;
  background-color: ${theme.colors.bg};
  margin: auto;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: ${theme.colors.font};
  margin: 0;
`;

export const Search = styled.div`
  padding-bottom: 15px;
`;

export const IconBtnAdd = styled(IconAdd)`
  width: 28px;
  height: 28px;
  border: none;
  fill: currentColor;
`;

export const ContactsWrap = styled.div`
  margin: 0;
  padding: 0;
  padding-top: 120px;
`;
