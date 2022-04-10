import styled from '@emotion/styled';

export const FormWrap = styled.form`
  margin-bottom: 20px;
  width: 250px;
  padding: 10px;
  border: 1px solid grey;
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  display: block;
`;

export const AddBtn = styled.button`
  width: 100px;
  padding: 5px;
  background-color: #739b75;
  border-radius: 3px;
  color: #ffffff;

  :hover {
    background-color: #4d9550;
  }
`;
