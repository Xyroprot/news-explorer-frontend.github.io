// Конструктор этого класса принимает опции, необходимые для инициализации работы с API
export default class MainApi {
  constructor(config) {
    this.config = config;
    this._request.bind(this);
  }

  // регистрирует нового пользователя;
  signup(payload) {
    return this._request('/signup', 'POST', this.config.HEADERS, payload);
  }

  // аутентифицирует пользователя на основе почты и пароля;
  signin(payload) {
    return this._request('/signin', 'POST', this.config.HEADERS, payload);
  }

  // возвращает информацию о пользователе;
  getUserData() {
    return this._request('/users/me', 'GET');
  }

  // забирает все статьи;
  getArticles() {
    return this._request('/articles', 'GET');
  }

  // создаёт статью;
  createArticle(payload) {
    return this._request('/articles', 'POST', this.config.HEADERS, payload);
  }

  // удаляет статью:
  removeArticle(articleId) {
    return this._request(`/articles/:${articleId}`, 'DELETE', this.config.HEADERS);
  }

  _request(url, method, header, payload) { // модель запроса
    return fetch(this.config.BASE_URL + url, {
      headers: header,
      credentials: 'include',
      method,
      body: payload ? JSON.stringify(payload) : undefined,
    })
      .then((res) => {
        console.log(res.ok && res.headers.get('Content-Length') < 1);
        if (res.ok && res.headers.get('Content-Length') < 1) {
          return res;
        }
        if (res.ok && res.headers.get('Content-Length') > 1) {
          return res.json();
        }
        return Promise.reject(res.json());
      })
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }
}
