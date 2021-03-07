import React from 'react';
import { Card } from 'react-bootstrap';

const BirthdayCard = (birthday) => {
  const calculateAge = (birthday) => {
    const splitBirthday = birthday.birthday.split('-');
    const day = splitBirthday[0];
    const month = splitBirthday[1];
    const year = birthday.birthYear;
    const dob = new Date(year, month, day);

    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  return (
    <Card key={birthday._id}>
      <Card.Body>
        <Card.Title>{`${birthday.firstName} ${birthday.lastName}`}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {`${birthday.birthday}-${birthday.birthYear}`}
        </Card.Subtitle>
        <Card.Text>{`${calculateAge(birthday)} years old`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BirthdayCard;
