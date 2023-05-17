import styled from '@emotion/styled';

export const Container = styled.label`
  width: 100%;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid green;
  border-radius: 25px;
  padding: 10px;
  margin-right: 15px;
  &:active,
  :focus {
    border: 1px solid red;
    outline: 0;
    outline-offset: 0;
  }
`;
