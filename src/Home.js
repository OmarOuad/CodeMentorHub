import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './components/navbar/Nav';
import bannerBackground from './assets/programmer.png';
import bannerBackground2 from './assets/programmer2.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import "./Home.css";
import Footer from './components/Footer';
import CourseCard from './CourseCard'; // Import the CourseCard component
import courses from './courseData'; // Import the courses array

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

  // Settings for the react-slick carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Display 5 cards at a time
    slidesToScroll: 1, // Scroll one card at a time
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // Add more responsive settings if needed
    ],
  };

  return (
    <>
      <Navbar onLanguageChange={handleLanguageChange} />
      <div className='homeContainer'>
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

        <section id="courses">
          <Container fluid>
            <Row>
              <Col xs={12}>
                <h2 className="text-center py-5">{t('home.courses')}</h2>
                <Slider {...sliderSettings}>
                  {courses.map((course) => (
                    <div key={course.id} className="slide-card">
                      <CourseCard
                        key={course.id}
                        id={course.id} // Pass the 'id' of each course to the CourseCard component
                        language={course.language}
                        field={course.field}
                        price={course.price}
                        logo={course.logo}
                      />
                    </div>
                  ))}
                </Slider>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="story">
          <Container fluid>
            <Row>
              <Col xs={6} className="text-center py-5 px-5">
                <h1 className="display-2" style={{ paddingBottom: '20px' }}>{t('home.our_purpose')}</h1>
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
      </div>
      <Footer />
    </>
  );
}
