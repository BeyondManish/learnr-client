import axios from 'axios';
import https from 'https';

// configure axios defaults
if (process.server) {
  axios.defaults.baseURL = process.env.API; // the client is running in server
} else {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
};

export default axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  }),
});