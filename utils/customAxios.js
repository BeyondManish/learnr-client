import axios from 'axios';
import https from 'https';
import { readFileSync } from 'fs';

const httpsOptions = {
  key: readFileSync(process.env.SSL_KEY),
  cert: readFileSync(process.env.SSL_CERT),
};

export default axios.create({
  baseURL: process.env.api,
  httpsAgent: new https.Agent(httpsOptions),
});