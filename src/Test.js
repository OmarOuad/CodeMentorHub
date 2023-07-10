import React, { useState } from 'react';
import Navbar from './Nav';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      question: 'C++',
      answer: {
        answer1: 'https://www.w3schools.com/cpp/cpp_quiz.asp',
        answer2: 'https://www.tutorialspoint.com/cplusplus/cpp_online_test.htm',
      },
    },
    {
      question: 'Java',
      answer: {
        answer1: 'https://www.javatpoint.com/core-java-quiz',
        answer2: 'https://www.w3schools.com/java/java_quiz.asp',
      },
    },
    {
      question: 'Python',
      answer: {
        answer1: 'https://www.tutorialsteacher.com/online-test/python-test',
        answer2: 'https://realpython.com/quizzes/',
      },
    },
    {
        question: 'Interview preparation',
        answer: {
          answer1: 'https://leetcode.com/problem-list/top-interview-questions/',
          answer2: 'https://www.springboard.com/blog/software-engineering/21-software-engineering-interview-questions/',
        },
      },
  ];

  return (
    <>
      <Navbar />
      <section id="intro">
        <Container>
          <Row className="justify-content-center p-5">
            <Col md={8}>
              <p style={{ fontSize: '23px', paddingTop: '20px' }}>
                In this page, you can find a variation of websites where you can practice for any exams or interviews for each language or field.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
        <div className="justify-content-center">
        <Row className="justify-content-center">
            <Col md={8}>
      {data.map((item, i) => (
       <Accordion key={i} defaultActiveKey="0" className='p-3'>
       <Accordion.Item eventKey={i.toString()} className='item'>
         <Accordion.Header onClick={() => toggle(i)}>
           {item.question}
         </Accordion.Header>
         <Accordion.Body className={selected === i ? 'show custom-accordion' : 'custom-accordion'}>
           {Object.values(item.answer).map((itemAnswer, j) => (
             <div key={j} className='custom-accordion'>
               <Link to={itemAnswer}>{itemAnswer}</Link>
             </div>
           ))}
         </Accordion.Body>
       </Accordion.Item>
     </Accordion>
     
      ))}
      </Col>
          </Row>
      </div>
    </>
  );
}
