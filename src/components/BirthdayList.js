import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BirthdayCard from '../components/BirthdayCard';

const BirthdayList = ({ title, birthdays }) => {
  if (birthdays.length === 0) {
    return (
      <div>
        <Row>
          <Col className='text-center'>
            <h2 style={{ fontFamily: 'Concert One, cursive' }}>
              {title.toUpperCase()}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col
            className='text-center'
            xs={{ span: 10, offset: 1 }}
            lg={{ span: 8, offset: 2 }}
          >
            <h4>No birthday reminders today</h4>
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <div>
      <Row>
        <Col className='text-center'>
          <h2 style={{ fontFamily: 'Concert One, cursive' }}>
            {title.toUpperCase()}
          </h2>
          <i className='fas fa-birthday-cake'></i>
        </Col>
      </Row>
      <Row>
        <Col
          className='text-center'
          xs={{ span: 10, offset: 1 }}
          lg={{ span: 8, offset: 2 }}
        >
          {birthdays.map((birthday, index) => (
            <BirthdayCard {...birthday} id={index} key={index} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default BirthdayList;
