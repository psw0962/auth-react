import React from 'react';
import Background from 'components/common/Auth/Background';
import Login from './Login';

// import Test from 'test.js';

// images
import backgroundimg from 'images/Auth/background/back.svg';

const Index = () => {
  return (
    <Background src={backgroundimg}>
      <Login />
      {/* <Test /> */}
    </Background>
  );
};

export default Index;
