import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// components
import * as Font from 'components/common/Auth/Font';
import { AuthTemplate } from 'templates';
import { AuthInput } from 'components/common/Auth/Input';
import { Container } from 'components/common/Auth/Container';

const ResetPw = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [certifiNum, setCertifiNum] = useState('');

  const [sendCodeWarning, setSendCodeWarning] = useState(false);
  const [complateWarning, setComplateWarning] = useState(false);

  const [sendCodeBtn, setSendCodeBtn] = useState(false);
  const [complateBtn, setComplateBtn] = useState(false);

  const InvalidHandler = (type, value) => {
    const emailValidation = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    switch (type) {
      case 'email':
        if (!emailValidation.test(value)) {
          setSendCodeWarning(true);
          setSendCodeBtn(false);
        } else {
          setSendCodeWarning(false);
          setSendCodeBtn(true);
        }
        break;

      case 'certifinum':
        if (value !== '') {
          setComplateBtn(true);
        } else {
          setComplateBtn(false);
        }
        break;
      //no default
    }
  };

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
            onChange={(e) => {
              setEmail(e.target.value);
              InvalidHandler('email', e.target.value);
            }}
          />
        </Wrapper>

        <WarningWrapper active={sendCodeWarning}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>올바른 이메일 형식이 아닙니다.</FontSize13>
        </WarningWrapper>

        <SendCodeBtn active={sendCodeBtn}>코드 보내기</SendCodeBtn>

        <Line />

        <Wrapper>
          <FontSize15 style={{ fontWeight: 'bold' }}>인증번호</FontSize15>

          <AuthInput
            onChange={(e) => {
              setCertifiNum(e.target.value);
              InvalidHandler('certifinum', e.target.value);
            }}
          />
        </Wrapper>

        <WarningWrapper active={complateWarning}>
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

// Main
const FontSize15 = styled(Font.FontSize15)`
  color: #727172;
  line-height: 21px;
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
