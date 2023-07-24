import React from 'react';
import Navbar from './components/navbar/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col , Card} from 'react-bootstrap';
import myIcon from './assets/myicon.jpeg'
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();

  // Language switch handler
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
  const introStyles = {
    backgroundImage: "url('/assets/R.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      <Navbar onLanguageChange={handleLanguageChange} />

      <section >
        <Container fluid>
            <Row className='d-flex justify-content-center align-items-center'>
                <Card style={{ width: '20rem', padding: '50px', backgroundColor: '#250042', margin: '25px', borderRadius: '10px', boxShadow: '0px 0px 100px rgba(0, 0, 0, 50)' }}>
                    <Card.Img variant="top" src={myIcon} alt="Card image cap" />
                    <Card.Body className="text-center">
                        <Card.Title style={{color:'#ffffff'}}>Admin</Card.Title>
                        <Card.Text>Me</Card.Text>
                    </Card.Body>
                </Card>

                
            </Row>
            <Row className="text-center">
                <p style={{ fontSize: '23px', paddingTop: '20px' }}>
                    I am a third-year software engineering student. I am still recruiting other members who can hopefully volunteer to make this website work.
                </p>
            </Row>
        </Container>
      </section>
      <Footer />

      
      
      
    </>
  );
}
