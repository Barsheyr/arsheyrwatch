import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, Home, Landing, Products, watchpage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/watchpage",
        element: <watchpage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
