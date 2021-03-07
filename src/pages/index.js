import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BirthdayList from '../components/BirthdayList';

const Reminders = () => {
  const [loading, setLoading] = useState(true);
  const [birthdays, setBirthdays] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const URL = 'http://localhost:8000/reminders';
        setLoading(true);
        setBirthdays([]);

        const { data } = await axios.get(URL);

        setLoading(false);
        setBirthdays(data.results);
      } catch (err) {
        setLoading(false);
        setBirthdays([]);
        setError(err.message);
      }
    };

    fetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && error) {
    return <div>{error}</div>;
  }

  if (!loading && !error) {
    return (
      <BirthdayList title='Todays Birthday Reminders' birthdays={birthdays} />
    );
  }

  return <h1>You have no birthday reminders for today!</h1>;
};

export default Reminders;
