import 'bootstrap/dist/css/bootstrap.min.css';



import { Accordion, Card, Button} from 'react-bootstrap';
import myIcon from './assets/myicon.jpeg'




import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './components/navbar/Nav';
import bannerBackground from './assets/programmer.png';
import bannerBackground2 from './assets/programmer2.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/Footer';
import CourseCard from './CourseCard'; // Import the CourseCard component
import courses from './courseData'; // Import the courses array
import './Faqpage.css'

export default function Home() {
  const { t, i18n } = useTranslation();

  // Language switch handler
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const introStyles = {
    backgroundImage: "url('/assets/R.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const faqData = [
    {
      question: 'What is this website about?',
      answer: 'This website is for uOttawa students who are struggling with programming courses.',
    },
    {
      question: 'How does CodeMentorHub work?',
      answer: 'if you are a student looking for a tutor, just purchase a course and we will look for a tutor for you. If you want to become a tutor, you can apply and we will reach out to you if we think you are suitable for an interview.',
    },
    {
      question: 'How can I become a tutor?',
      answer: 'Just press on the "become a tutor" button on top and you can begin your application. You have to be a uOttawa student to participate in CodeMentorHub',
    },
    {
      question: 'What to do if I dont like a tutor?',
      answer: 'No problem. Just send us an email at support@codementorhub.com and we can either find a new tutor for you or you can get a full refund.',
    },
    
    
    {
      question: 'How can I request help?',
      answer: 'You can contact us at support@codementorhub.com and we will try our best to assist you',
    },
  ];


  

  return (
    <>
    <Navbar onLanguageChange={handleLanguageChange} />

    <div style={{ backgroundColor: '#270046', color: '#fff', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>FAQ</h1>
        <Accordion style={{ maxWidth: '800px', margin: 'auto' }}>
          {faqData.map((faq, index) => (
            <Card key={index} style={{ backgroundColor: '#270046', marginBottom: '10px' }}>
              <Card.Header>
                <Accordion
                  key={index}
                  defaultActiveKey="0"
                  className="p-3"
                >
                  <Accordion.Item eventKey={index.toString()} className="faq">
                    <Accordion.Header onClick={() => toggle(index)}>
                      {faq.question}
                    </Accordion.Header>
                    <Accordion.Body className={selected === index ? 'show custom-accordion' : 'custom-accordion'}>
                      <div className="custom-accordion">
                        {faq.answer}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Header>
              <Accordion.Collapse eventKey={index + 1}>
                <Card.Body>{faq.answer}</Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>

<Footer />
    </>
  );
}
