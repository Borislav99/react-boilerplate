import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router';

const Home = React.lazy(() => import('@pages/Home'));
const NotFound = React.lazy(() => import('@pages/NotFound'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
