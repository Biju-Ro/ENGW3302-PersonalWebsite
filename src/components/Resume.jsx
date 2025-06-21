import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

const Resume = () => {
  return (
    <section id="resume" className="section-padding">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold orange-accent" data-aos="fade-up">
              Resume
            </h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">
              View and download my resume
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="mx-auto mb-4">
            <div className="text-center mb-4">
              <Button 
                variant="primary" 
                size="lg" 
                href="src/assets/RohanBiju_Resume_NEU.pdf" 
                target="_blank"
                data-aos="zoom-in"
                className="pulse me-3"
              >
                <i className="fas fa-download me-2"></i>
                Download Resume
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg" 
                href="src/assets/RohanBiju_Resume_NEU.pdf" 
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <i className="fas fa-external-link-alt me-2"></i>
                Open in New Tab
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="mx-auto">
            <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <Card.Body className="p-0">
                {/* PDF Viewer */}
                <div style={{ height: '800px', width: '100%' }}>
                  <iframe
                    src="src/assets/RohanBiju_Resume_NEU.pdf"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', borderRadius: '15px' }}
                    title="Resume PDF"
                  >
                    <p>
                      Your browser does not support PDFs. 
                      <a href="src/assets/RohanBiju_Resume_NEU.pdf" target="_blank" rel="noopener noreferrer">
                        Download the PDF
                      </a>
                    </p>
                  </iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Resume