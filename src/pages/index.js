import './index.css';
import MainApi from '../js/api/MainApi';

// MainApi
const config = {
  baseUrl: process.env.API_URL || 'https://api.photocollectionserver.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
};
const mainApi = new MainApi(config);
