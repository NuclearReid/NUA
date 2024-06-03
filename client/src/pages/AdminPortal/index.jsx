import Auth from "../../utils/auth";
import { Row, Col, Container } from "react-bootstrap";

import ChangeStatsForm from "../../components/adminComponents/statsForm";
import GrievanceCardDisplay from "../../components/adminComponents/GrievanceCardDisplay";
import AdminNav from "../../components/adminComponents/AdminNav";

export default function adminPortal() {
  // handles the logout
  const isLoggedIn = Auth.loggedIn();
  const logoutOnClick = () => {
    Auth.logout();
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <AdminNav className="container-fluid mb-3" />
          <h1 className="text-center">The Admin Portal!</h1>
          <Col>
            <Row xs={12} md={4}>
              <ChangeStatsForm />
            </Row>
          </Col>

          {/* This is the logout button */}
          <button className="primary m-3" onClick={logoutOnClick}>
            Logout!
          </button>
        </>
      ) : (
        window.location.assign("/")
      )}
    </>
  );
}
