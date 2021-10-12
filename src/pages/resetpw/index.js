import React from 'react';
import Background from 'components/common/Auth/Background';
import ResetPw from './ResetPw';

// images
import backgroundimg from 'images/Auth/background/back.svg';

const Index = () => {
  return (
    <Background src={backgroundimg}>
      <ResetPw />
    </Background>
  );
};

export default Index;
