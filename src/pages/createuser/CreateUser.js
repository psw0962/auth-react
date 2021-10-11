import React from 'react';
import styled from 'styled-components';

// components
import * as Font from 'components/common/Auth/Font';
import { AuthTemplate } from 'templates';
import { AuthInput } from 'components/common/Auth/Input';
import { Container } from 'components/common/Auth/Container';

const CreateUser = () => {
  return (
    <Container>
      <AuthTemplate>
        <FontSize22>사용자 로그인</FontSize22>

        <FontSize15 fontWeight="normal" textAlign="center" style={{ margin: '10px 0px 36px 0px' }}>
          DIP Portal은 Data Intelligence Platform을
          <br />
          손쉽게 활용할 수 있는 웹 서비스 입니다.
        </FontSize15>

        <Wrapper>
          <FontSize15 fontWeight="bold">아이디</FontSize15>
          <AuthInput />
        </Wrapper>

        <Wrapper style={{ marginTop: 21 }}>
          <FontSize15 fontWeight="bold">비밀번호</FontSize15>
          <AuthInput />
        </Wrapper>

        <Button>사용 신청</Button>
      </AuthTemplate>

      <InnerBox>
        <FontSize15 fontWeight="normal">비밀번호가 생각나지 않으세요?</FontSize15>

        <FontSize15 fontWeight="normal" style={{ color: '#EA002B', cursor: 'pointer' }}>
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

// Main
const InnerBox = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 26px;
`;

const Wrapper = styled.div`
  width: 85%;
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
