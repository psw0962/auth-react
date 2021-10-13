import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

// components
import * as Font from 'components/common/Auth/Font';
import { AuthTemplate } from 'templates';
import { Container } from 'components/common/Auth/Container';

const LockUser = (setPageNum) => {
  const history = useHistory();

  return (
    <Container>
      <AuthTemplate>
        <FontSize22>계정 잠금</FontSize22>

        <FontSize15
          style={{ margin: '10px 0px 36px 0px', textAlign: 'center' }}
        >
          비밀번호를 5회 이상 틀려 계정이 잠겼습니다.
          <br />
          문의사항이 있으시면 이메일로
          <br />
          관리자에게 문의해 주세요.
        </FontSize15>

        <FontSize15>관리자 이메일</FontSize15>
        <FontSize15 style={{ color: '#EA002B', textDecoration: 'underline' }}>
          admin@sk.com
        </FontSize15>

        <ResultImg src={require('images/Auth/result/lock.svg').default} />
      </AuthTemplate>

      <FooterWrapper>
        <FontSize15>처음 방문 이신가요?</FontSize15>
        <FontSize15
          onClick={() => {
            history.push('/createuser');
          }}
          style={{ color: '#EA002B', cursor: 'pointer' }}
        >
          사용신청
        </FontSize15>
      </FooterWrapper>

      <FooterWrapper style={{ marginTop: 6 }}>
        <FontSize15>비밀번호가 생각나지 않으세요?</FontSize15>
        <FontSize15
          onClick={() => {
            history.push('/resetpw');
          }}
          style={{ color: '#EA002B', cursor: 'pointer' }}
        >
          비밀번호 재설정
        </FontSize15>
      </FooterWrapper>
    </Container>
  );
};

export default LockUser;

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
  font-weight: normal;
  line-height: 21px;
`;

const ResultImg = styled.img`
  margin: 42px 0px 42px 0px;
`;

const FooterWrapper = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 25px;
`;
