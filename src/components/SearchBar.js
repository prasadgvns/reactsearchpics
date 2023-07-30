import { useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Container fluid>
          <Row className="mb-3">
            <Col>
              <Form.Label>Enter Search Term:</Form.Label>
              <Form.Control type="text" onChange={handleChange} value={term} />
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default SearchBar;
