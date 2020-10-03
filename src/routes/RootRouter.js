import React from 'react';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const RootRouter = ({ logged, setIsLogged }) => {
  console.log('from board ', logged);

  return (
    <div className="container">
      {logged ? <PrivateRouter /> : <PublicRouter setIsLogged={setIsLogged} />}
    </div>
  );
};

export default RootRouter;
