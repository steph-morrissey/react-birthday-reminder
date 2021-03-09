import React from 'react';
import { Card } from 'react-bootstrap';

const BirthdayCard = (birthday) => {
  const calculateAge = (birthday) => {
    const dob = new Date(birthday.year, birthday.month, birthday.day);

    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  return (
    <Card key={birthday._id} className='m-2 rounded'>
      <Card.Body>
        <Card.Title
          style={{ color: '#BAE5B4' }}
        >{`${birthday.firstName} ${birthday.lastName}`}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted' style={{ color: '#B8E4E6' }}>
          {`${birthday.day}-${birthday.month}-${birthday.year}`}
        </Card.Subtitle>
        <Card.Text style={{ color: '#EBD3A3' }}>{`${calculateAge(
          birthday,
        )} years old`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BirthdayCard;
