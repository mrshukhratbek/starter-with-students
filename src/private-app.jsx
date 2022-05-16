import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() =>
  import('./pages').then((res) => ({
    default: res.Home,
  }))
);

const Profile = lazy(() =>
  import('./pages').then((res) => ({
    default: res.Profile,
  }))
);

export const Private = () => {
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </div>
  );
};
