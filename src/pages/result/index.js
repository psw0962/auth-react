import React from 'react';
import Background from 'components/common/Auth/Background';
import Result from './Result';

// images
import backgroundimg from 'images/Auth/background/back.svg';

const Index = () => {
  return (
    <Background src={backgroundimg}>
      <Result />
    </Background>
  );
};

export default Index;
