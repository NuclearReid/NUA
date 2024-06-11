import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Auth from '../src/utils/auth';

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
import AdminNav from "./components/adminComponents/AdminNav";
import OperatorApplication from "./pages/OperatorApplication";
import AdminApplication from "./pages/AdminPortal/application";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = Auth.loggedIn(); // Your auth check logic

  if (!isLoggedIn) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If the user is logged in, render the children components
  return children;
};

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
        element: (
          <ProtectedRoute>
            <AdminNav />
            <AdminPortal />
          </ProtectedRoute>
        ),
      },
      {
        path: "/adminportal/admingrievance",
        element: (
          <ProtectedRoute>
            <AdminNav />
            <AdminGrievance />
          </ProtectedRoute>
        ),
      },
      {
        path: "/adminportal/adminapplication",
        element: (
          <ProtectedRoute>
            <AdminNav />
            <AdminApplication />
          </ProtectedRoute>
        )
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
      },
      {
        path: '/operatorapplication',
        element: <OperatorApplication />
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
