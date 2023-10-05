import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './../../components/layout/header/Header';
import { Footer } from './../../components/layout/footer/Footer';

const UILayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default UILayout;
