import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Read from './pages/Read.jsx';
import Create from './pages/Create.jsx';
import Update from './pages/Update.jsx';
import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Read />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
