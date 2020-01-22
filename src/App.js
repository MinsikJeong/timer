import React from 'react';
import Timer from "./components/Timer";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <Jumbotron className="d-flex align-items-center min-vh-100" style={{backgroundColor:'black', height: 550, borderRadius: 0}}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1 style={{color:'white', textAlign: "center"}}>5분만 뛰자</h1>
            <Timer isPlaying={true}/>
          </Col>
        </Row>
      </Container>
    </Jumbotron>

  );
}

export default App;
