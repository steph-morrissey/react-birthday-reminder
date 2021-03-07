export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://sheltered-citadel-55036.herokuapp.com';

export const REMINDERS_URI = `${BASE_URL}/reminders`;
