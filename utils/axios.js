import axios from 'axios';

export default axios.create({
  baseURL: process.env.api,
  httpAgent: new https.Agent({
    rejectUnauthorized: false
  }),
});