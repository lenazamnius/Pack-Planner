import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import book from './book';

const PublicRoute = ({ children, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth.uid ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `${book.listsBoard}`,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
