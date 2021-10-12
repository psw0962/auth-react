import React, { useState } from 'react';
import Background from 'components/common/Auth/Background';
import CreateUser from './CreateUser';
import CreateUserComplate from './CreateUserComplate';

// images
import backgroundimg from 'images/Auth/background/back.svg';

const Index = () => {
  const [pageNum, setpageNum] = useState(0);

  return (
    <Background src={backgroundimg}>
      {pageNum === 0 && <CreateUser />}
      {pageNum === 1 && <CreateUserComplate />}
    </Background>
  );
};

export default Index;
