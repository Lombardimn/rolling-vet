import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFounds } from "../../utilities";
import { PrivateRoutes, Roles } from "../../models";
import { lazy } from "react";
import React from "react";

interface UserData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Object;
  location: Object;
  image: string;
  episode: string[];
  url: string;
  created: string;
  rol: string;
  userDataChange: (user: UserData) => void;
}

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Home = lazy(() => import('./Home/Home'));

function Private() {

  return (
    <RoutesWithNotFounds>
      <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesWithNotFounds>
  )
}

export default Private