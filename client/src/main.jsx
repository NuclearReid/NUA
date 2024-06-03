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
import AdminGrievance from "./pages/AdminPortal/grievance";
import Resources from "./pages/Resources";
import Login from './pages/Login';
import ParticipantGrievanceForm from "./pages/ParticipantGrievanceForm";

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
      // All the admin portal bits
      {
        path: "/adminportal",
        element: <AdminPortal />,
      },
      {
        path: "/adminportal/admingrievance",
        element: <AdminGrievance />
      },
      //////////////////////////////
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: '/resources',
        element: <Resources />,
      },
      {
        path: '/particpantGrievanceForm',
        element: <ParticipantGrievanceForm />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
