import "./App.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import Select from "./components/Select";
import DragDrop from "./components/DragDrop";
import DataCheck from "./components/DataCheck";
import Tolerance from "./components/Tolerance";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import Client from "./components/Client";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="wrapper">
      <Container className="container-modal">
        <button className="custom-close-button">
          <span>&#x2715;</span>
        </button>
        <h2 className="text-center primary-color bold-text mt-5 primary-udnerline">
          Document Upload
        </h2>
        <Form className="mb-5">
          <Row>
            <Col lg={6} md={6} sm={12} xs={12} className="p-4">
              <Select />
              <DragDrop />
              <DataCheck />
              <Tolerance />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="p-4">
              <Schedule />
              <Location />
              <Client />
            </Col>
          </Row>
          <h5 className="text-center mt-5 primary-color bold-text">
            Data in the import file is correct. Please press Continue to import.
          </h5>
          <Buttons />
        </Form>
      </Container>
    </div>
  );
}

export default App;
