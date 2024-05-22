import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import NoMatch from "./pages/NoMatch";
import Landing from "./pages/Landing";
// import TestPage from "./pages/Profile";
// import LoggedIn from "./pages/LoggedIn";
import AdminPortal from './pages/AdminPortal';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/adminportal",
        element: <AdminPortal />,
      },
      {
        path: "/login",
        element: <Login />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
