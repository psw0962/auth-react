import React from 'react';
import AuthMain from './AuthMain';
import Background from 'components/common/Auth/Background';

// images
import backgroundimg from 'images/background/back.svg';

const Index = () => {
  return (
    <Background src={backgroundimg}>
      <AuthMain />
    </Background>
  );
};

export default Index;
