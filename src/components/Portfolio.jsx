import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Right to Repair Article",
      description: "An in-depth analysis of the right to repair movement and its impact on consumer rights and technology sustainability.",
      link: "/src/assets/Final_PublicWriting.pdf", 
      type: "Writing"
    },
    {
      title: "Literary Analysis of the Role of AI in Film",
      description: "A comprehensive examination of how artificial intelligence is portrayed and utilized in contemporary cinema.",
      link: "#", // This should be replaced with your actual article link
      type: "Writing"
    },
    {
      title: "Meme Marketing",
      description: "Exploring the evolution and effectiveness of meme-based marketing strategies in digital communications.",
      link: "https://en.wikipedia.org/wiki/Meme_marketing",
      type: "Project"
    }
  ]

  return (
    <section id="portfolio" className="section-padding bg-light">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold orange-accent" data-aos="fade-up">
              Portfolio
            </h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">
              Explore my writing samples, presentations, and relevant work
            </p>
          </Col>
        </Row>
        <Row>
          {portfolioItems.map((item, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card 
                className="h-100 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card.Body className="d-flex flex-column">
                  <div className="bg-light-orange text-white rounded p-3 mb-3 text-center">
                    <i className={`fas ${item.type === 'Writing' ? 'fa-pen' : item.type === 'Presentation' ? 'fa-presentation' : 'fa-folder'} fa-2x`}></i>
                  </div>
                  <h5 className="orange-accent">{item.title}</h5>
                  <p className="flex-grow-1">{item.description}</p>
                  <Button 
                    variant="outline-primary" 
                    href={item.link}
                    target="_blank"
                  >
                    View {item.type}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Portfolio