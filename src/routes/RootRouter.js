import React from 'react';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const RootRouter = ({ logged, setIsLogged }) => {
  return (
    <div className="container">
      {logged ? (
        <PrivateRouter logged={logged} />
      ) : (
        <PublicRouter setIsLogged={setIsLogged} />
      )}
    </div>
  );
};

export default RootRouter;
