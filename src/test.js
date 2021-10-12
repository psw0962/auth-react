import axios from 'axios';
import React from 'react';
import https from 'https';

const TestContainer = () => {
  const test = async () => {
    const formData = new FormData();

    formData.append('returnURL', 'https://dv-data.skdy.co.kr:443/default.jsp');
    formData.append('ssosite', 'dv-data.skdy.co.kr');
    formData.append('mode', 'set');
    formData.append('NADomainIp', '');
    formData.append('domainCred', '');
    formData.append('ipLogonUrl', '');
    formData.append('systemID', '');

    try {
      await axios
        .request({
          headers: { 'content-type': 'application/json' },
          url: 'https://dv-data.skdy.co.kr:443/default.jsp',
          method: 'GET',
          // data: req.data ? req.data : null,
        })
        .then((res) => res.data)
        .then((data) =>
          axios.request({
            headers: { 'content-type': 'application/json' },
            url: 'https://proxy.gdisso.skdy.co.kr/nsso-authweb/nacookiemanage.do',
            method: 'POST',
            data: formData,
            httpsAgent: new https.Agent({
              rejectUnauthorized: false,
            }),
          })
        );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <button onClick={() => test()}>submit</button>
    </>
  );
};

export default TestContainer;
