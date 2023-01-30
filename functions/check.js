import axios from '../utils/axios';

export const createAdmin = async ({ firstname, lastname, username, email, password }) => {
  const response = await axios.post('/auth/create-admin', { firstname, lastname, username, email, password });
  return response.data;
};

export const checkAdmin = async () => {
  const response = await axios.get('/auth/check-admin');
  console.log(response.data);
  return response.data;
};