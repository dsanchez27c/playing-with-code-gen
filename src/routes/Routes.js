import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../views/home/Home';
import UILayout from '../views/uilayout/UILayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UILayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <>Esta es la página de About.</>
      }
    ]
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
