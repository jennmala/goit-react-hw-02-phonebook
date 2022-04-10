import styled from '@emotion/styled';

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Name = styled.span`
  text-transform: capitalize;
  font-size: 18px;
`;

export const Number = styled.span`
  font-weight: 500;
`;

export const DeleteBtn = styled.button`
  margin-left: 5px;
  background-color: #b75656;
  border-radius: 3px;

  :hover {
    background-color: #b63636;
  }
`;
