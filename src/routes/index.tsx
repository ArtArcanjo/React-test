import { ReactElement } from "react";
import Home from '../pages/home/home';
import {Route, Routes as BaseRoutes} from 'react-router-dom';
import Play from '../pages/play/play'

export default function Routes() {
    return (
      <BaseRoutes>
        <Route path="/" element={<Home/>} />
        <Route path="/play" element={<Play/>} />
      </BaseRoutes>
    );
  }