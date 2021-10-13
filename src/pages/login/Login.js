import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// components
import * as Font from 'components/common/Auth/Font';
import { AuthTemplate } from 'templates';
import { AuthInput } from 'components/common/Auth/Input';
import { Container } from 'components/common/Auth/Container';

// utils
import * as Validations from 'utils/Validations';

const Login = (props) => {
  const history = useHistory();

  const { email, setEmail } = props;
  const { pw, setPw } = props;
  const { emailInvalid, setEmailInvalid } = props;
  const { wrongUserInfoInvalid, setWrongUserInfoInvalid } = props;
  const { checkId, setCheckId } = props;
  const { checkPw, setCheckPw } = props;

  return (
    <Container>
      <AuthTemplate>
        <FontSize22>사용자 로그인</FontSize22>

        <FontSize15
          style={{ margin: '10px 0px 36px 0px', textAlign: 'center' }}
        >
          서비스를 이용하시려면 로그인이 필요합니다.
          <br />
          로그인 ID와 비밀번호를 입력해주세요.
        </FontSize15>

        <Wrapper>
          <FontSize15 style={{ fontWeight: 'bold' }}>로그인 ID</FontSize15>
          <AuthInput
            onChange={(e) => {
              setEmail(e.target.value);
              Validations.EmailInvalidHandler(e.target.value, setEmailInvalid);
            }}
            placeholder="example@sk.com"
          />
        </Wrapper>

        <WarningWrapper active={emailInvalid}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>올바른 이메일 형식이 아닙니다.</FontSize13>
        </WarningWrapper>

        <WarningWrapper active={checkId}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>로그인 ID를 입력해주세요.</FontSize13>
        </WarningWrapper>

        <Wrapper style={{ marginTop: 20 }}>
          <FontSize15 style={{ fontWeight: 'bold' }}>비밀번호</FontSize15>
          <AuthInput placeholder="비밀번호를 입력해주세요." />
        </Wrapper>

        <WarningWrapper active={wrongUserInfoInvalid}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>로그인 ID 또는 PW가 불일치 합니다</FontSize13>
        </WarningWrapper>

        <WarningWrapper active={checkPw}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>비밀번호를 입력해주세요.</FontSize13>
        </WarningWrapper>

        <LoginBtn>
          <FontSize15 style={{ color: '#fff', fontWeight: 'bold' }}>
            로그인
          </FontSize15>
        </LoginBtn>
      </AuthTemplate>

      <FooterWrapper>
        <FontSize15>처음 방문 이신가요?</FontSize15>
        <FontSize15
          onClick={() => history.push('/createuser')}
          style={{ color: '#EA002B', cursor: 'pointer' }}
        >
          사용신청
        </FontSize15>
      </FooterWrapper>

      <FooterWrapper style={{ marginTop: 6 }}>
        <FontSize15>비밀번호가 생각나지 않으세요?</FontSize15>
        <FontSize15
          onClick={() => history.push('/resetpw')}
          style={{ color: '#EA002B', cursor: 'pointer' }}
        >
          비밀번호 재설정
        </FontSize15>
      </FooterWrapper>
    </Container>
  );
};

export default Login;

// Font
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
  color: #727172;
`;

const FontSize13 = styled(Font.FontSize13)`
  font-weight: 500;
  line-height: 18px;
  color: #ff619a;
`;

const Wrapper = styled.div`
  width: 85%;
`;

const WarningWrapper = styled.div`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  align-items: center;
  gap: 6px;

  width: 85%;
  margin-top: 19px;
`;

const FooterWrapper = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 25px;
`;

const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 36px;

  margin: 25px 0px 36px 0px;
  background: #ea002b;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
