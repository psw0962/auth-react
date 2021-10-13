import React, { useState } from 'react';
import Background from 'components/common/Auth/Background';
import ResetPwAuth from './ResetPwAuth';
import ResetPw from './ResetPw';

// images
import backgroundimg from 'images/Auth/background/back.svg';

const Index = () => {
  // 페이지 인덱스
  const [pageNum, setpageNum] = useState(0);

  // value
  const [email, setEmail] = useState('');
  const [certifiNum, setCertifiNum] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');

  // ----------------------- validation box -----------------------
  // 이메일 유효성검사
  const [sendCodeInvalid, setSendCodeInvalid] = useState(false);
  // 인증에 실패했습니다.
  const [failCertifiInvalid, setFailCertifiInvalid] = useState(false);
  // 코드 보내기 버튼
  const [sendCodeBtn, setSendCodeBtn] = useState(false);
  // 확인 버튼
  const [complateBtn, setComplateBtn] = useState(false);
  // 비밀번호 유효성검사
  const [pwInvalid, setPwInvalid] = useState(false);
  // 비밀번호 재확인 검사
  const [pwConfirmInvalid, setPwConfirmInvalid] = useState(false);

  return (
    <Background src={backgroundimg}>
      {pageNum === 0 && (
        <ResetPwAuth
          email={email}
          setEmail={setEmail}
          certifiNum={certifiNum}
          setCertifiNum={setCertifiNum}
          sendCodeInvalid={sendCodeInvalid}
          setSendCodeInvalid={setSendCodeInvalid}
          failCertifiInvalid={failCertifiInvalid}
          setFailCertifiInvalid={setFailCertifiInvalid}
          sendCodeBtn={sendCodeBtn}
          setSendCodeBtn={setSendCodeBtn}
          complateBtn={complateBtn}
          setComplateBtn={setComplateBtn}
        />
      )}

      {pageNum === 1 && (
        <ResetPw
          pw={pw}
          setPw={setPw}
          pwConfirm={pwConfirm}
          setPwConfirm={setPwConfirm}
          pwInvalid={pwInvalid}
          setPwInvalid={setPwInvalid}
          pwConfirmInvalid={pwConfirmInvalid}
          setPwConfirmInvalid={setPwConfirmInvalid}
        />
      )}
    </Background>
  );
};

export default Index;
