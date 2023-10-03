import { lazy } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

const IntroAnimation = lazy(() => import('../components/anim/IntroAnimation'));
const LandingPage = lazy(() => import('../pages/LandingPage'));
const LayoutAuth = lazy(() => import('../components/auth/LayoutAuth'));
const LayoutDasboard = lazy(() => import('../components/dashboard/LayoutDasboard'));

export const routes = {
  ANIM: "/",
  LANDING: "/landing",
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;
  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.ANIM} element={<IntroAnimation />} />
        <Route path={routes.LANDING} element={<LandingPage />} />
        <Route path={routes.AUTH} element={<LayoutAuth />} />
        <Route path={routes.DASHBOARD} element={<LayoutDasboard />} />
      </Routes>
      {background && (
        <Routes>
          <Route path={routes.LANDING} element={<LandingPage />} />
        </Routes>
      )}
    </>
  );
};

export default BaseRoutes;
