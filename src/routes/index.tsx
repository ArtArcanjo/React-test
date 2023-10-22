import { ReactElement } from "react";
import Home from '../pages/home/home';
import {Route, Routes as BaseRoutes} from 'react-router-dom';
import DetailRaces from '../pages/home/detailRaces'

export default function Routes() {
    return (
      <BaseRoutes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail" element={<DetailRaces arthur={'azul'} />} />
      </BaseRoutes>
    );
  }