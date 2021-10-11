import React from 'react';
import styled from 'styled-components';

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateWrapper>
      <HeaderWrapper>
        <Title>DIP Portal</Title>
      </HeaderWrapper>

      <ContentWrapper>{children}</ContentWrapper>
    </AuthTemplateWrapper>
  );
};

export default AuthTemplate;

const AuthTemplateWrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0px 18px 0px 18px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 114px;
  /* padding: 35px 135px; */
  background-color: #ea002b;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 36px; */
  background-color: #fff;

  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 0px 0px 5px 5px;
`;

const Title = styled.span`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 46px;
  color: #ffffff;
`;
