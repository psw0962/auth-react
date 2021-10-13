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

const CreateUser = (props) => {
  const history = useHistory();

  const { email, setEmail } = props;
  const { pw, setPw } = props;
  const { emailInvalid, setEmailInvalid } = props;
  const { signedUpUserInvalid, setSignedUpUserInvalid } = props;
  const { checkId, setCheckId } = props;
  const { checkPw, setCheckPw } = props;
  const { firstVisit, setFirstVisit } = props;

  return (
    <Container>
      <AuthTemplate>
        <FontSize22>사용 신청</FontSize22>

        <FontSize15
          fontWeight="normal"
          textAlign="center"
          style={{ margin: '10px 0px 36px 0px' }}
        >
          DIP Portal은 Data Intelligence Platform을
          <br />
          손쉽게 활용할 수 있는 웹 서비스 입니다.
        </FontSize15>

        <Wrapper>
          <FontSize15 fontWeight="bold">로그인 ID</FontSize15>
          <AuthInput
            placeholder="example@sk.com"
            onChange={(e) => {
              setEmail(e.target.value);
              Validations.EmailInvalidHandler(e.target.value, setEmailInvalid);
            }}
          />
        </Wrapper>

        <WarningWrapper active={emailInvalid}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>올바른 이메일 형식이 아닙니다.</FontSize13>
        </WarningWrapper>

        <WarningWrapper active={checkId}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>로그인 ID를 입력해 주세요.</FontSize13>
        </WarningWrapper>

        <Wrapper style={{ marginTop: 21 }}>
          <FontSize15 fontWeight="bold">비밀번호</FontSize15>
          <AuthInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </Wrapper>

        <WarningWrapper active={firstVisit}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>
            사이트를 처음 방문하는 사용자는
            <br />
            비밀번호를 재설정 해야 이용이 가능합니다.
          </FontSize13>
        </WarningWrapper>

        <WarningWrapper active={checkPw}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>비밀번호를 입력해주세요.</FontSize13>
        </WarningWrapper>

        <WarningWrapper active={signedUpUserInvalid}>
          <img alt="warning" src={require('images/Auth/warning.svg').default} />
          <FontSize13>이미 가입한 계정 입니다.</FontSize13>
        </WarningWrapper>

        <Button>사용 신청</Button>
      </AuthTemplate>

      <InnerBox>
        <FontSize15 fontWeight="normal">
          비밀번호가 생각나지 않으세요?
        </FontSize15>

        <FontSize15
          onClick={() => history.push('/resetpw')}
          fontWeight="normal"
          style={{ color: '#EA002B', cursor: 'pointer' }}
        >
          비밀번호 재설정
        </FontSize15>
      </InnerBox>
    </Container>
  );
};

export default CreateUser;

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
const InnerBox = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 26px;
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

const Button = styled.button`
  width: 89px;
  height: 36px;
  margin: 25px 0px 36px 0px;
  cursor: pointer;

  background: #ea002b;
  border-radius: 5px;
  border: none;

  font-weight: bold;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
`;
