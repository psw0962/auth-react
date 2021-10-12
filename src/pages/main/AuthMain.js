import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// components
import * as Font from 'components/common/Auth/Font';
import { AuthTemplate } from 'templates';
import { Container } from 'components/common/Auth/Container';

const AuthMain = (props) => {
  const history = useHistory();

  return (
    <Container>
      <AuthTemplate>
        <FontSize22>사용자 로그인</FontSize22>

        <FontSize15>
          로그인이 필요한 서비스입니다.
          <br /> 로그인 방식을 선택하세요.
        </FontSize15>

        <Button onClick={() => props.setPageNum(0)}>
          <img
            alt="userauth"
            src={require('images/Auth/loginmain/userauth.svg').default}
          />
          <FontSize20>사용자 인증</FontSize20>
        </Button>

        <Button
          onClick={() => history.push('/login')}
          style={{ marginTop: 20 }}
        >
          <img
            alt="ID/PW"
            src={require('images/Auth/loginmain/idpw.svg').default}
          />
          <FontSize20>ID/PW 로그인</FontSize20>
        </Button>

        <LineWrapper>
          <Line src={require('images/Auth/loginmain/line.svg').default} />
          <LineText style={{ margin: '0px 4px 0px 4px' }}>
            처음 방문 이신가요?
          </LineText>
          <Line src={require('images/Auth/loginmain/line.svg').default} />
        </LineWrapper>

        <Button
          onClick={() => history.push('/createuser')}
          style={{ marginBottom: 36 }}
        >
          <img
            alt="createuser"
            src={require('images/Auth/loginmain/createuser.svg').default}
          />
          <FontSize20>사용 신청</FontSize20>
        </Button>
      </AuthTemplate>
    </Container>
  );
};

export default AuthMain;

// Font
const FontSize22 = styled(Font.FontSize22)`
  margin-top: 36px;

  font-weight: bold;
  line-height: 31px;
  text-align: center;
  color: #231815;
`;

const FontSize20 = styled(Font.FontSize20)`
  font-weight: bold;
  line-height: 28px;
  color: #231815;
`;

const FontSize15 = styled(Font.FontSize15)`
  margin: 10px 0px 36px 0px;

  font-weight: normal;
  line-height: 21px;
  text-align: center;
  color: #727172;
`;

// Main
const Button = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;

  width: 90%;
  height: 65px;
  padding-left: 27px;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border: 1px solid #727172;
  }
`;

const LineWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 26px 0px 26px 0px;
`;

const Line = styled.img`
  @media screen and (max-width: 768px) {
    width: 30%;
  }
`;

const LineText = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: #727172;
  margin: 0px 4px 0px 4px;

  @media screen and (max-width: 768px) {
    font-size: 2vw;
  }
`;
