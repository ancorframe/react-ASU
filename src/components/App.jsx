import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { ScrollToTop } from './ScrollToTop';
import { AdminApp } from 'pages/admin/AdminApp';
import { ClientApp } from 'pages/client/ClientApp';

export const App = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/*" element={<ClientApp />} />
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
