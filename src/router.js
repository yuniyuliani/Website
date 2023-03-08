import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import Kontak from './components/pages/kontak';
// App
import App from './App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to={"/beranda"} />} />
      <Route path="/kontak" element={< Kontak />} />
    </Route>
  )
);

export default router;
