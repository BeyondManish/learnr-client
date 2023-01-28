import axios from 'axios';
import https from 'https';

export default axios.create({
  baseURL: process.env.api,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  }),
});