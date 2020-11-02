import REQUEST_DATES from '../constants/request-dates';

const { TODAY_ISO, SEVEN_DAYS_ISO } = REQUEST_DATES;

// Отвечает за взаимодействие с NewsAPI.
export default class NewsApi {
  constructor(config) {
    this.config = config;
    this._request.bind(this);
  }

  // возвращает список новостей на основе запроса.
  getNews(keyword) {
    return this._request(`?q=${keyword}&apiKey=${this.config.HEADERS.authorization}&from=${SEVEN_DAYS_ISO}&to=${TODAY_ISO}&pageSize=100`, this.config.HEADERS);
  }

  _request(url, header) { // модель запроса
    return fetch(this.config.BASE_URL + url, {
      headers: header,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((data) => data)
      .catch((error) => {
        throw error;
      });
  }
}
