import styled from '@emotion/styled';
import { ReactComponent as IconAdd } from '../../svg/plus.svg';
import { theme } from 'components/thems/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${theme.width.desktop}) {
    max-width: 1200px;
    margin: auto;
  }
`;

export const ContainerFixed = styled.div`
  position: fixed;
  /* top: 0;
  left: 0; */
  width: 100%;
  z-index: 99;
`;

export const HeaderWrap = styled.div`
  max-width: 1200px;
  backdrop-filter: blur(8px);
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 0 10px;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: ${theme.colors.white};
  margin: 0;
`;

export const IconBtnAdd = styled(IconAdd)`
  width: 28px;
  height: 28px;
  border: none;
  fill: currentColor;
`;

export const SearchWrap = styled.div`
  padding: 0 10px 10px 10px;
`;
