import React from 'react';

const Login = React.lazy(() =>
  import('./pages/auth/login/login.component').then((res) => ({
    default: res.Login,
  }))
);

export const Public = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Login login="login" />
    </React.Suspense>
  );
};
