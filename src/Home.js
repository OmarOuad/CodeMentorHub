import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/navbar/Nav';
import bannerBackground from './assets/programmer.png';
import bannerBackground2 from './assets/programmer2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./Home.css";
import Footer from './components/Footer';

export default function Home() {
  const { t, i18n } = useTranslation();

  // Language switch handler
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  const introStyles = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      <Navbar onLanguageChange={handleLanguageChange} />
      <section id="intro" style={introStyles}>
        <Container fluid>
          <Row>
            <Col xs={6} className="d-flex justify-content-center align-items-center">
              <img src={bannerBackground} alt="banner image" className="p-5" />
            </Col>
            <Col xs={6} className="d-flex justify-content-center align-items-center">
              <div>
                <h1>
                  <div className="display-5 bg-secondarybg-gradient p-5">{t('home.title')}</div>
                  <div>{t('home.subtitle')}</div>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="story">
        <Container fluid>
          <Row>
            <Col xs={6} className="text-center py-5 px-5">
              <h1 className=" display-2" style={{ paddingBottom: '20px' }}>{t('home.our_purpose')}</h1>
              <p style={{ fontSize: '23px' }}>{t('home.purpose_text1')}</p>
              <p style={{ fontSize: '23px', paddingTop: '20px' }}>{t('home.purpose_text2')}</p>
              <p style={{ fontSize: '23px', paddingTop: '20px' }}>{t('home.purpose_text3')}</p>
            </Col>
            <Col xs={6} className="d-flex justify-content-center align-items-center">
              <img
                src={bannerBackground2}
                alt="banner image"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
