import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const About = () => {
  return (
    <section id="about" className="section-padding bg-light">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold orange-accent" data-aos="fade-up">
              About Me
            </h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">
              Get to know more about my background and expertise
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <Card.Body className="p-5">
                <Row>
                  <Col lg={4} className="text-center mb-4 mb-lg-0">
                    <div className="bg-light-orange text-white rounded-circle d-inline-block p-4 mb-3">
                      <i className="fas fa-user fa-3x"></i>
                    </div>
                    <h4 className="orange-accent">Bio</h4>
                  </Col>
                  <Col lg={8}>
                    <p className="mb-4">
                      I'm a software engineer who believes that great technology should be accessible and solve real problems for real people. My approach to development centers on user experience and accessibility, ensuring that every application I build genuinely addresses user needs. I love creating software that makes a meaningful difference in people's lives.
                    </p>
                    <p>
                      I'm driven by curiosity and love diving into complex challenges, from developing machine learning models to building full-stack applications. I won the Congressional App Challenge with my Ping app, a real-time emergency communication platform that helps flood victims and first responders coordinate during disasters. The project showcases my passion for user-centered design and building systems that work when they're needed most. Getting recognized with the Change Maker Award was incredibly rewarding and reinforced why I love building software that creates real value for users.
                    </p>
                    <p>
                        Currently, I work as a research assistant at Northeastern's sustainability incubator, where I develop internal software solutions and apply machine learning techniques to sustainability challenges. I also have experience developing BERT models for natural language processing applications. It's exciting to combine my technical expertise with research that focuses on environmental impact and sustainable innovation. I'm always looking for opportunities to use my skills in ways that make a positive impact on communities and push the boundaries of what's possible with technology.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About