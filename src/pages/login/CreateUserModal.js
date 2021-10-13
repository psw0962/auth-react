import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/common/Auth/Container';

const CreateUserModal = () => {
  return (
    <Container>
      <ModalWrapper>
        <HeaderWrapper>
          <Title>사용 신청 하기</Title>
        </HeaderWrapper>

        <ContentWrapper>
          <Text>
            사용자 정보가 없습니다. 처음 방문이신 분은 사용 신청 후<br />
            이용해 주세요.
          </Text>

          <Wrapper>
            <CreateBtn>사용 신청</CreateBtn>
            <CancelBtn>취소</CancelBtn>
          </Wrapper>
        </ContentWrapper>
      </ModalWrapper>
    </Container>
  );
};

export default CreateUserModal;

const ModalWrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0px 18px 0px 18px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 51px;
  background-color: #ea002b;
  border-radius: 5px 5px 0px 0px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;

  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 0px 0px 5px 5px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 82%;
  margin-bottom: 36px;
`;

const Title = styled.p`
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 22px;
  line-height: 31px;
  color: #ffffff;
  margin-left: 26px;
`;

const Text = styled.p`
  font-family: Noto Sans KR;
  font-weight: normal;
  font-size: 15px;
  line-height: 21px;
  color: #727172;
  margin: 26px;
`;

const CreateBtn = styled.button`
  width: 89px;
  height: 36px;
  background: #ea002b;
  border-radius: 5px;

  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 15px;
  line-height: 21px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const CancelBtn = styled.button`
  width: 60px;
  height: 36px;
  background: #fff;
  border-radius: 5px;

  font-family: Noto Sans KR;
  font-weight: normal;
  font-size: 15px;
  line-height: 21px;
  color: #727172;
  border: 1px solid #e4e4e4;
  cursor: pointer;
`;
