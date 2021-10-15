import React, { useState } from 'react';
import AuthMain from './AuthMain';
import Background from 'components/common/Auth/Background';
import AuthLoadingModal from 'components/common/Auth/AuthLoadingModal';

// images
import backgroundimg from 'images/Auth/background/background.png';

const Index = () => {
  const [pageNum, setPageNum] = useState(1);

  return (
    <Background src={backgroundimg}>
      {pageNum === 0 && <AuthLoadingModal />}
      {pageNum === 1 && <AuthMain setPageNum={setPageNum} />}
    </Background>
  );
};

export default Index;
