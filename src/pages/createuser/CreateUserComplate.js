import React from 'react';
import styled from 'styled-components';

// components
import * as Font from 'components/common/Auth/Font';
import { AuthTemplate } from 'templates';
import { Container } from 'components/common/Auth/Container';

const CreateUserComplate = () => {
  return (
    <Container>
      <AuthTemplate>
        <FontSize22>사용신청 완료</FontSize22>

        <FontSize15
          style={{ margin: '10px 0px 12px 0px', textAlign: 'center' }}
        >
          관리자가 사용 승인을 완료할때까지
          <br />
          기다려 주세요.
        </FontSize15>

        <FontSize15>관리자 이메일</FontSize15>
        <FontSize15 style={{ color: '#EA002B' }}>admin@sk.com</FontSize15>

        <ComplateImg
          alt="complate"
          src={require('images/Auth/createuser/complate.svg').default}
        />

        <FontSize15 style={{ width: '80%', textAlign: 'center' }}>
          관리자의 사용 승인이 완료 되면
          <br />
          다음과 같은 주소로 승인 메일이 발송됩니다.
        </FontSize15>

        <Wrapper style={{ marginTop: 36 }}>
          <FontSize15 style={{ fontWeight: 'bold' }}>로그인 ID</FontSize15>
          <UserInfoBox>
            <FontSize15>admin@sk.com</FontSize15>
          </UserInfoBox>
        </Wrapper>

        <Wrapper style={{ marginTop: 20 }}>
          <FontSize15 style={{ fontWeight: 'bold' }}>이름</FontSize15>
          <UserInfoBox>
            <FontSize15>admin</FontSize15>
          </UserInfoBox>
        </Wrapper>

        <Wrapper style={{ marginTop: 20 }}>
          <FontSize15 style={{ fontWeight: 'bold' }}>소속</FontSize15>
          <UserInfoBox>
            <FontSize15>SK 디스커버리</FontSize15>
          </UserInfoBox>
        </Wrapper>

        <ComplateBtn>
          <FontSize15 style={{ color: '#fff', fontWeight: 'bold' }}>
            확인
          </FontSize15>
        </ComplateBtn>
      </AuthTemplate>
    </Container>
  );
};

export default CreateUserComplate;

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

// Main
const ComplateImg = styled.img`
  margin: 48px 0px 48px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding-left: 15px;
  height: 36px;
  background: #fafafa;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 5px;
`;

const ComplateBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 58px;
  height: 36px;
  margin: 25px 0px 36px 0px;
  background: #ea002b;
  border-radius: 5px;
  border: none;
`;
