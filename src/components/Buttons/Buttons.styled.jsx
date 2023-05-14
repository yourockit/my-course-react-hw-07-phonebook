import styled from '@emotion/styled';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: none;
  border-radius: 50%;
  background-color: green;
  margin-left: 30px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: red;
  }
`;
