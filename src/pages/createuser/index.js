import React from 'react';
import Background from 'components/common/Auth/Background';
import CreateUser from './CreateUser';

// images
import backgroundimg from 'images/background/back.svg';

const Index = () => {
  return (
    <Background src={backgroundimg}>
      <CreateUser />
    </Background>
  );
};

export default Index;
