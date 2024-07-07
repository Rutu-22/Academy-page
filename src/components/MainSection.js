import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const MainSection = () => {
  return (
    <Container className="main-section">
      <section id="home" className="section">
        <Row>
          <Col md={12} className="text-center">
            <h1 className="white-text">Welcome to Our Academy</h1>
            <p className="white-text">Learn from the best instructors from around the world.</p>
          </Col>
        </Row>
      </section>

      <section id="courses" className="section">
        <Row>
          <Col md={12} className="text-center">
            <h2 className="white-text">Our Courses</h2>
            <p className="white-text">Explore our extensive range of courses designed to provide you with the knowledge and skills required in today's competitive world.</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src="Angular.png" />
              <Card.Body>
                <Card.Title>Angular Course</Card.Title>
                <Card.Text>Introduction to Angular. Learn the basics and advanced concepts of Angular to build dynamic web applications.</Card.Text>
                <Button variant="primary">Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src="React.png" />
              <Card.Body>
                <Card.Title>React Course</Card.Title>
                <Card.Text>Detailed overview of React. Master React to create powerful and efficient user interfaces for web applications.</Card.Text>
                <Button variant="primary">Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src="Bootstrap.png" />
              <Card.Body>
                <Card.Title>Bootstrap Course</Card.Title>
                <Card.Text>Full course for beginners. Learn how to use Bootstrap to create responsive and modern web designs.</Card.Text>
                <Button variant="primary">Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section id="about" className="section">
        <Row>
          <Col md={12}>
            <Card className="info-card">
              <Card.Body className="text-center">
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                  Our Academy is dedicated to providing top-notch education and training programs. We believe in empowering individuals through knowledge and skills to help them achieve their professional and personal goals.
                </Card.Text>
                <Card.Text>
                  With a team of experienced instructors and a comprehensive curriculum, we offer a wide range of courses that cater to different learning needs. Join us to embark on a journey of learning and growth.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section id="contact" className="section">
        <Row>
          <Col md={12}>
            <Card className="info-card">
              <Card.Body className="text-center">
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                  Get in touch with us for more information about our programs. We're here to help you with any questions or concerns you may have.
                </Card.Text>
                <Card.Text>
                  Email: info@academy.com | Phone: (123) 456-7890
                </Card.Text>
                <Card.Text>
                  Address: 123 Academy St, Knowledge City, Education State, 45678
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default MainSection;
