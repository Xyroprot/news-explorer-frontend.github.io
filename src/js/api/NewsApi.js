import REQUEST_DATES from '../constants/request-dates';

const { TODAY_ISO, SEVEN_DAYS_ISO } = REQUEST_DATES;

// Отвечает за взаимодействие с NewsAPI.
export default class NewsApi {
  constructor(config) {
    this.config = config;
    this._request.bind(this);
  }

  // возвращает список новостей на основе запроса.
  getNews(payload) {
    return this._request(`?q=${payload}&apiKey=${this.config.HEADERS.authorization}&from=${TODAY_ISO}&to=${SEVEN_DAYS_ISO}&pageSize=100`, this.config.HEADERS, payload);
  }

  _request(url, header, payload) { // модель запроса
    return fetch(this.config.BASE_URL + url, {
      headers: header,
      body: payload ? JSON.stringify(payload) : undefined,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((data) => data)
      .catch((error) => {
        console.error(error);
      });
  }
}
