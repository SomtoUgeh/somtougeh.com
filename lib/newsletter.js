import axios from 'axios';

const API_KEY = process.env.BUTTONDOWN_API_KEY;
const SUBSCRIBE_ENDPOINT = `https://api.buttondown.email/v1/subscribers`;

export const subscribeToNewsletter = async email => {
  return await axios.post(SUBSCRIBE_ENDPOINT, JSON.stringify({ email }), {
    headers: {
      Authorization: `Token ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  });
};

export const getAllSubscribers = async () => {
  return await axios.get(`https://api.buttondown.email/v1/subscribers`, {
    headers: {
      Authorization: `Token ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  });
};
