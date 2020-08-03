// Конструктор этого класса принимает опции, необходимые для инициализации работы с API
export default class MainApi {
  constructor(config) {
    this.config = config;
    this._request.bind(this);
  }

  // регистрирует нового пользователя;
  signup(payload) {
    return this._request('/signup', 'POST', this.config.headers, payload);
  }

  // аутентифицирует пользователя на основе почты и пароля;
  signin(payload) {
    return this._request('/signin', 'POST', this.config.headers, payload);
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
    return this._request('/articles', 'POST', this.config.headers, payload);
  }

  // удаляет статью:
  removeArticle(articleId) {
    return this._request(`/articles/:${articleId}`, 'DELETE', this.config.headers);
  }

  _request(url, method, header, payload) { // модель запроса
    return fetch(this.config.baseUrl + url, {
      method,
      credentials: 'include',
      headers: method !== 'GET' ? header : undefined,
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
