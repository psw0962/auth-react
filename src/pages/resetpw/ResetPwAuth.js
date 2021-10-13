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

const ResetPw = (props) => {
  const history = useHistory();

  const { email, setEmail } = props;
  const { certifiNum, setCertifiNum } = props;
  const { sendCodeInvalid, setSendCodeInvalid } = props;
  const { failCertifiInvalid, setFailCertifiInvalid } = props;
  const { sendCodeBtn, setSendCodeBtn } = props;
  const { complateBtn, setComplateBtn } = props;

  return (
    <Container>
      <AuthTemplate>
        <FontSize22>비밀번호 재설정</FontSize22>

        <FontSize15
          fontWeight="normal"
          textAlign="center"
          style={{ margin: '10px 0px 36px 0px' }}
        >
          신규 비밀번호를 설정 하면 로그인 ID/PW 인증이
          <br />
          필요한 사내의 모든 서비스 비밀번호가 변경됩니다.
        </FontSize15>

        <Wrapper>
          <FontSize15 style={{ fontWeight: 'bold' }}>
            본인 확인 (이메일)
          </FontSize15>

          <AuthInput
            placeholder="admin@sk.com"
            onChange={(e) => {
              setEmail(e.target.value);
              Validations.ResetPwAuthInvalidHandler(
                'email',
                e.target.value,
                setSendCodeInvalid,
                setSendCodeBtn
              );
            }}
          />
        </Wrapper>

        <WarningWrapper active={sendCodeInvalid}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>올바른 이메일 형식이 아닙니다.</FontSize13>
        </WarningWrapper>

        <SendCodeBtn active={sendCodeBtn}>코드 보내기</SendCodeBtn>

        <Line />

        <Wrapper style={{ position: 'relative', float: 'left' }}>
          <FontSize15 style={{ fontWeight: 'bold' }}>인증번호</FontSize15>

          <AuthInput
            placeholder="인증번호를 입력하세요."
            onChange={(e) => {
              setCertifiNum(e.target.value);
              Validations.ResetPwAuthInvalidHandler(
                'certifinum',
                e.target.value,
                null,
                setComplateBtn
              );
            }}
          />

          <TimeRemaining active={false}>남은 시간 9:10</TimeRemaining>
        </Wrapper>

        <WarningWrapper active={failCertifiInvalid}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>
            인증에 실패했습니다.
            <br />
            인증번호를 확인해주시기 바랍니다.
          </FontSize13>
        </WarningWrapper>

        <ComplateBtn active={complateBtn}>확인</ComplateBtn>
      </AuthTemplate>
    </Container>
  );
};

export default ResetPw;

// Font
const FontSize22 = styled(Font.FontSize22)`
  margin-top: 36px;

  font-weight: bold;
  line-height: 31px;
  text-align: center;
  color: #231815;
`;

const FontSize15 = styled(Font.FontSize15)`
  color: #727172;
  line-height: 21px;
`;

const FontSize13 = styled(Font.FontSize13)`
  font-weight: 500;
  line-height: 18px;
  color: #ff619a;
`;

// Main
const TimeRemaining = styled.span`
  display: ${(props) => (props.active ? 'inline-block' : 'none')};
  position: absolute;
  left: 70%;
  bottom: 10%;

  font-weight: normal;
  line-height: 21px;
  text-align: right;
  color: #ea002b;
  font-size: 1.5rem;
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

const SendCodeBtn = styled.button`
  width: 103px;
  height: 36px;
  margin-top: 25px;

  background: ${(props) => (props.active ? '#EA002B' : '#f5f5f5')};
  border-radius: 5px;
  border: none;
  cursor: pointer;

  font-weight: bold;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  color: ${(props) => (props.active ? '#fff' : '#b5b5b6')};
`;

const ComplateBtn = styled.button`
  width: 58px;
  height: 36px;
  margin: 25px 0px 36px 0px;

  background: ${(props) => (props.active ? '#EA002B' : '#f5f5f5')};
  border-radius: 5px;
  border: none;
  cursor: pointer;

  font-weight: bold;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  color: ${(props) => (props.active ? '#fff' : '#b5b5b6')};
`;

const Line = styled.div`
  width: 85%;
  height: 0px;
  margin: 36px 0px 36px 0px;

  border: 1px solid #e4e4e4;
`;
