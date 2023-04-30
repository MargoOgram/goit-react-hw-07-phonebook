import styled from '@emotion/styled'

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: 15px;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 2px;
  border-radius: 4px;
  border: solid #6c0599 3px;
  &:focus {
    border-radius: 4px;
    border: 3px solid #E0D2D5;
    box-shadow: 20px 20px 50px #E0D2D5;
  }
`;