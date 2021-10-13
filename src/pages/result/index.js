import React, { useState } from 'react';
import Background from 'components/common/Auth/Background';

// result cards
import WaitAllowUser from './WaitAllowUser';
import DisabledUser from './DisabledUser';
import RefuseSignup from './RefuseSignup';
import LockUser from './LockUser';
import SignedupUser from './SignedupUser';
import ImpossibleUser from './ImpossibleUser';

// images
import backgroundimg from 'images/Auth/background/back.svg';

const Index = () => {
  const [pageNum, setPageNum] = useState(0);

  return (
    <Background src={backgroundimg}>
      {pageNum === 0 && <WaitAllowUser setPageNum={setPageNum} />}
      {pageNum === 1 && <DisabledUser setPageNum={setPageNum} />}
      {pageNum === 2 && <RefuseSignup setPageNum={setPageNum} />}
      {pageNum === 3 && <LockUser setPageNum={setPageNum} />}
      {pageNum === 4 && <SignedupUser setPageNum={setPageNum} />}
      {pageNum === 5 && <ImpossibleUser setPageNum={setPageNum} />}
    </Background>
  );
};

export default Index;
