import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <p>CodeMentorHub &copy; {new Date().getFullYear()}</p>
            <p>Made with ❤️ for uOttawa students</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
