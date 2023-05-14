import styled from '@emotion/styled';

export const Container = styled.label`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 355px;
  border: 1px solid green;
  border-radius: 20px;
  padding: 10px;
  &:active,
  :focus {
    border: 1px solid red;
    outline: 0;
    outline-offset: 0;
  }
`;
