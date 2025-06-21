import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2025 Rohan Biju. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="mailto:rohanbijuboston@gmail.com" className="text-white me-3">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/rohanbiju/" className="text-white me-3">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Biju-Ro" className="text-white">
              <i className="fab fa-github"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer