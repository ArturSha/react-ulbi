import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Error } from '../pages/Error';
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';
import { Loader } from './UI/Loader/Loader';

export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, i) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      ))}

      <Route path='/error' element={<Error />}></Route>

      <Route path='*' element={<Navigate to='/posts' />}></Route>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, i) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      ))}
      <Route path='*' element={<Navigate to='/login' />}></Route>
    </Routes>
  );
};
