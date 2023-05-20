import styled from '@emotion/styled';

export const Container = styled.label`
  display: flex;
  width: calc(100% - 50px);
`;

export const Input = styled.input`
  width: 100%;
  font-size: 18px;
  height: 50px;
  padding: 0 0 0 5px;
  border: none;
  margin-right: 15px;
  &:active,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;
