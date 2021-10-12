import styled from 'styled-components';

export const AuthInput = styled.input`
  width: 100%;
  height: 36px;
  margin-top: 8px;
  padding-left: 15px;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 5px;

  &::placeholder {
    color: #b5b5b6;
  }

  &:focus {
    outline-color: #727172;
  }
`;
