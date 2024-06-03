import { Row, Col } from "react-bootstrap";

import ChangeStatsForm from "../../components/adminComponents/statsForm";


export default function adminPortal() {

  return (
    <> 
          <h1 className="text-center">The Admin Portal!</h1>
          <Col>
            <Row xs={12} md={4} >
              <ChangeStatsForm />
            </Row>
          </Col>      
    </>
  );
}
