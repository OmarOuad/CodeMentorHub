import React, { useState } from 'react';
import { useParams, Link , useNavigate} from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import './BuyCourse.css'; // Import the custom CSS file for additional styling
import Navbar from './components/navbar/Nav';
import Footer from './components/Footer';

const BuyCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // State to store the form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    paymentMethod: 'Credit Card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary actions with the form data here, such as making an API call for payment processing.
    // For this example, let's just log the form data to the console.
    console.log(formData);
    // Optionally, you can redirect the user to a "Thank You" page or another relevant page after the purchase is complete.
    // For this example, we'll use the previous page for demonstration purposes.
    navigate('/CodeMentorHub/PurchaseSuccessful');
  };

  return (
    <div>
        <Navbar />
    <Container className="buy-course">
      <h2>Buy Course</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="paymentMethod">
          <Form.Label>Payment Method</Form.Label>
          <Form.Control
            as="select"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option>Credit Card</option>
            <option>PayPal</option>
            {/* Add more payment options here if needed */}
          </Form.Control>
        </Form.Group>

        {formData.paymentMethod === 'Credit Card' && (
          <div>
            <Form.Group controlId="cardNumber">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="expiryDate">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="cvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>
        )}

        <Button variant="primary" type="submit">
          Complete Purchase
        </Button>
        <Link to="/CodeMentorHub/courses" className="btn btn-secondary return-btn">
          Cancel
        </Link>
      </Form>
    </Container>
    <Footer />
    </div>
  );
};

export default BuyCourse;
