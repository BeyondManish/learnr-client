import axios from 'axios';
import https from 'https';

export default axios.create({
  baseURL: process.env.api,
  httpAgent: new https.Agent({
    rejectUnauthorized: false
  }),
});