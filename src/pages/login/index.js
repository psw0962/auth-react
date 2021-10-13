import React, { useState } from 'react';
import Background from 'components/common/Auth/Background';
import Login from './Login';
import CreateUserModal from './CreateUserModal';

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
  // 로그인 ID 또는 PW가 불일치 합니다
  const [wrongUserInfoInvalid, setWrongUserInfoInvalid] = useState(false);
  // 로그인 ID를 입력해 주세요.
  const [checkId, setCheckId] = useState(false);
  // 비밀번호를 입력해주세요.
  const [checkPw, setCheckPw] = useState(false);

  return (
    <Background src={backgroundimg}>
      {pageNum === 0 && (
        <Login
          email={email}
          setEmail={setEmail}
          pw={pw}
          setPw={setPw}
          emailInvalid={emailInvalid}
          setEmailInvalid={setEmailInvalid}
          wrongUserInfoInvalid={wrongUserInfoInvalid}
          setWrongUserInfoInvalid={setWrongUserInfoInvalid}
          checkId={checkId}
          setCheckId={setCheckId}
          checkPw={checkPw}
          setCheckPw={setCheckPw}
        />
      )}

      {pageNum === 1 && <CreateUserModal />}
    </Background>
  );
};

export default Index;
