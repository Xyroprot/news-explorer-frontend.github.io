import './index.css';

import configMain from '../js/constants/config-main-api';
import configNews from '../js/constants/config-news-api';

import MainApi from '../js/api/MainApi';
import NewsApi from '../js/api/NewsApi';

const mainApi = new MainApi(configMain);
const newsApi = new NewsApi(configNews);
