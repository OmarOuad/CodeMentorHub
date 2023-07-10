import React from 'react';
import Navbar from './Nav';
import bannerBackground from './assets/programmer.png';
import bannerBackground2 from './assets/programmer2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function App() {
  const introStyles = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      <Navbar />

      <section id="intro" style={introStyles}>
        <Container fluid>
          <Row>
            <Col xs={6} className="d-flex justify-content-center align-items-center">
              <img src={bannerBackground} alt="banner image" className="p-5" />
            </Col>
            <Col xs={6} className="d-flex justify-content-center align-items-center">
              <div>
                <h1>
                  <div className="display-5 bg-secondarybg-gradient p-5">CodeMentorHub</div>
                  <div>Made for students by students</div>
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
                    <h1 className=" display-2" style={{ paddingBottom: '20px' }}>Our purpose</h1>

                    <p style={{ fontSize: '23px' }}>
                    Welcome to uOttawa's exclusive online platform for programming and computer science courses! Our website brings together the brightest minds within our university community to deliver exceptional educational content tailored specifically for our students.
                    </p>
                
                    <p style={{ fontSize: '23px', paddingTop: '20px' }}>
                    The story of our website began with a simple yet powerful vision: to empower students with the knowledge and skills necessary to excel in the world of programming and computer science. We recognized the immense talent and expertise that resides within our university, and we wanted to provide a platform for these students to share their insights and insights with their peers.
                    </p>

                    <p style={{ fontSize: '23px', paddingTop: '20px' }}>
                    Driven by our passion for learning and innovation, we embarked on a journey to create an online hub where students could access high-quality courses taught by their fellow classmates. We firmly believe that students possess a unique perspective, and their fresh and relatable teaching approach can truly resonate with their peers.                    
                    </p>



                
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
    </>
  );
}
