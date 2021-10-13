import React, { useState } from 'react';
import Background from 'components/common/Auth/Background';
import CreateUser from './CreateUser';
import CreateUserComplate from './CreateUserComplate';

// images
import backgroundimg from 'images/Auth/background/back.svg';

const Index = () => {
  // 페이지 인덱스
  const [pageNum, setpageNum] = useState(0);

  // email, pw value
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  // ----------------------- validation box -----------------------
  // 올바른 이메일 형식이 아닙니다.
  const [emailInvalid, setEmailInvalid] = useState(false);
  // 이미 가입한 계정 입니다.
  const [signedUpUserInvalid, setSignedUpUserInvalid] = useState(false);
  // 로그인 ID를 입력해 주세요.
  const [checkId, setCheckId] = useState(false);
  // 비밀번호를 입력해주세요.
  const [checkPw, setCheckPw] = useState(false);
  // 첫 방문 비밀번호 재설정
  const [firstVisit, setFirstVisit] = useState(false);

  return (
    <Background src={backgroundimg}>
      {pageNum === 0 && (
        <CreateUser
          email={email}
          setEmail={setEmail}
          pw={pw}
          setPw={setPw}
          emailInvalid={emailInvalid}
          setEmailInvalid={setEmailInvalid}
          signedUpUserInvalid={signedUpUserInvalid}
          setSignedUpUserInvalid={setSignedUpUserInvalid}
          checkId={checkId}
          setCheckId={setCheckId}
          checkPw={checkPw}
          setCheckPw={setCheckPw}
          firstVisit={firstVisit}
          setFirstVisit={setFirstVisit}
        />
      )}

      {pageNum === 1 && <CreateUserComplate />}
    </Background>
  );
};

export default Index;
