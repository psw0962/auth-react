import React, { useEffect } from 'react';
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

  const { pw, setPw } = props;
  const { pwConfirm, setPwConfirm } = props;
  const { pwInvalid, setPwInvalid } = props;
  const { pwConfirmInvalid, setPwConfirmInvalid } = props;

  useEffect(() => {
    if (pwConfirm !== '' && pw !== pwConfirm) {
      setPwConfirmInvalid(true);
    } else {
      setPwConfirmInvalid(false);
    }
  }, [pw, pwConfirm]);

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
          <FontSize15 style={{ fontWeight: 'bold' }}>새 비밀번호</FontSize15>

          <AuthInput
            placeholder="새 비밀번호를 입력하세요."
            onChange={(e) => {
              setPw(e.target.value);
              Validations.PwInvalidHandler(e.target.value, setPwInvalid);
            }}
          />
        </Wrapper>

        <WarningWrapper active={pwInvalid}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>
            비밀번호는 영문, 숫자, 특수문자 포함
            <br />
            8자 이상 이어야 합니다.
          </FontSize13>
        </WarningWrapper>

        <Wrapper style={{ marginTop: 20 }}>
          <FontSize15 style={{ fontWeight: 'bold' }}>비밀번호 확인</FontSize15>

          <AuthInput
            placeholder="같은 비밀번호를 입력하세요."
            onChange={(e) => {
              setPwConfirm(e.target.value);
            }}
          />
        </Wrapper>

        <WarningWrapper active={pwConfirmInvalid}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>비밀번호가 불일치 합니다.</FontSize13>
        </WarningWrapper>

        <ComplateBtn>확인</ComplateBtn>
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

const ComplateBtn = styled.button`
  width: 58px;
  height: 36px;
  margin: 25px 0px 36px 0px;

  background: #ea002b;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  font-weight: bold;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
`;
