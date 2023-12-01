import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFounds } from "../../utilities";
import { PrivateRoutes } from "../../models";
import { lazy } from "react";
import React from "react";

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Home = lazy(() => import('./Home/Home'));

function Private() {
  return (
    <RoutesWithNotFounds>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesWithNotFounds>
  )
}

export default Private