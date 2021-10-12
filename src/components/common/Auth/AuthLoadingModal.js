import React from 'react';
import styled from 'styled-components';

// components
import * as Font from 'components/common/Auth/Font';
import { AuthTemplate } from 'templates';
import { Container } from 'components/common/Auth/Container';

const AuthLoadingModal = () => {
  return (
    <Container>
      <AuthTemplate>
        <FontSize22>사용자 인증</FontSize22>

        <LoadingImg src={require('images/Auth/loading/loading.svg').default} />

        <FontSize22 style={{ color: '#EA002B' }}>인증서 확인중...</FontSize22>

        <FontSize15>잠시 기다려 주세요.</FontSize15>
      </AuthTemplate>
    </Container>
  );
};

export default AuthLoadingModal;

const FontSize22 = styled(Font.FontSize22)`
  margin-top: 36px;

  font-weight: bold;
  line-height: 31px;
  text-align: center;
  color: #231815;
`;

const FontSize15 = styled(Font.FontSize15)`
  font-weight: normal;
  line-height: 21px;
  text-align: center;
  color: #727172;

  margin: 10px 0px 124px 0px;
`;

const LoadingImg = styled.img`
  margin: 85px 0px 29px 0px;

  animation-name: spinCircle;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spinCircle {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
