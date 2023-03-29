import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import argv from '@/util/argv';

const httpsAgent = 
  argv['proxy-port']
  ? new HttpsProxyAgent({
    host: '127.0.0.1',
    port: argv['proxy-port'],
  })
  : undefined;

const request = axios.create({
  httpsAgent,
});

export default request;
