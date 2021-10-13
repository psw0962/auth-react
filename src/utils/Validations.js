const emailRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const pwRegExp =
  /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~,!,@,#,$,*,(,),=,+,_,.,|]).*$/;

// 이메일 유효성 검사
export const EmailInvalidHandler = (value, setFunc) => {
  if (!emailRegExp.test(value)) {
    setFunc(true);
  } else {
    setFunc(false);
  }
};

// 비밀번호 유효성 검사
export const PwInvalidHandler = (value, setFunc) => {
  if (!pwRegExp.test(value)) {
    setFunc(true);
  } else {
    setFunc(false);
  }

  if (!pwRegExp.test(value)) {
    setFunc(true);
  } else {
    setFunc(false);
  }
};

// 비밀번호 재설정 인증 유효성 검사
export const ResetPwAuthInvalidHandler = (
  type,
  value,
  setInvalidFunc,
  setBtnFunc
) => {
  switch (type) {
    case 'email':
      if (!emailRegExp.test(value)) {
        setInvalidFunc(true);
        setBtnFunc(false);
      } else {
        setInvalidFunc(false);
        setBtnFunc(true);
      }
      break;

    case 'certifinum':
      if (value !== '') {
        setBtnFunc(true);
      } else {
        setBtnFunc(false);
      }
      break;
    //no default
  }
};
