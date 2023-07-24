import checkmark from './assets/checkmark.png'
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './PurchaseSuccess.css'; // Import the custom CSS file for additional styling
import Navbar from './components/navbar/Nav';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

const PurchaseSuccess = () => {
  const { t, i18n } = useTranslation();

  // Language switch handler
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Navbar onLanguageChange={handleLanguageChange} />
    <Container className="purchase-success">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <Image
            src={checkmark}
            alt="Green Tick"
            className="tick-image"
          />
          <h2 className="text-success">Purchase Successful!</h2>
          <p>Thank you for your purchase.</p>
          <Link to="/CodeMentorHub/courses" className="btn btn-primary return-btn">
            Back to Courses
          </Link>
        </Col>
      </Row>
    </Container>
    <Footer />
    </div>
  );
};

export default PurchaseSuccess;

