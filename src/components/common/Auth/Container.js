import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 416px;

  @media screen and (max-width: 768px) {
    padding: 0px 18px 0px 18px;
  }
`;
