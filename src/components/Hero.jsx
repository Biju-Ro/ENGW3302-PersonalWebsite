import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Hero = () => {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Rohan Biju"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
        setTimeout(() => setShowCursor(false), 1000)
      }
    }, 150) 
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero-section text-white">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-3">
              <span className={showCursor ? 'typing-animation' : ''}>{text}</span>
            </h1>
            <h2 className="h4 mb-4 opacity-75">Full-Stack Web Developer</h2>
            <p className="lead mb-4">
              Passionate about creating innovative web solutions and bringing ideas to life through code.
            </p>
            <Button 
              variant="light" 
              size="lg" 
              href="#about"
              className="me-3 pulse"
            >
              Learn More About Me
            </Button>
            <Button 
              variant="outline-light" 
              size="lg" 
              href="#resume"
            >
              View Resume
            </Button>
          </Col>
          <Col lg={6} className="text-center">
            <img 
              src="/rohan_biju.jpg" 
              alt="Rohan Biju" 
              className="profile-img-large"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero