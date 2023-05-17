import styled from '@emotion/styled';

export const Container = styled.label`
  display: flex;
  width: calc(100% - 50px);
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 25px;
  padding: 10px;
  margin-right: 15px;
  &:active,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;
