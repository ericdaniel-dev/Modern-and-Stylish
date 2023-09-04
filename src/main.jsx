import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Homepage from './component/pages/Homepage';
import Cartpage from './component/pages/Cart';
import Loginpage from './component/pages/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App pages={<Homepage/>} />
  },
  {
    path: '/cart',
    element: <App pages={<Cartpage/>} />
  },
  {
    path: '/login',
    element: <App pages={<Loginpage/>} />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
