import BaseComponent from './BaseComponent';

export default class NewsCard extends BaseComponent { // Класс карточки новости
  constructor(template, api) {
    super();
    this.template = template;
    this.api = api;
  }

  // отрисовывает карточку
  renderCard(article, layout) {
    this.article = article;
    this.layout = layout;
    const {
      keyword, title, text, date, source, link, image,
    } = this.article;

    this.content = this.template.content;

    if (this.content.querySelector('.place-card__icon_tag')) {
      const tag = this.template.querySelector('.place-card__icon_tag');
      tag.textContent = keyword;
    }
    this.content.querySelector('.place-card__preview').href = link;
    this.content.querySelector('.place-card__image').style = `background-image: url(${image})`;
    this.content.querySelector('.place-card__image').dataset.url = image;
    this.content.querySelector('.place-card__date').textContent = date;
    this.content.querySelector('.place-card__title').textContent = title;
    this.content.querySelector('.place-card__text').textContent = text;
    this.content.querySelector('.place-card__source').textContent = source;

    this.layout.appendChild(this.content.cloneNode(true));
  }

  // отрисовывает иконку карточки
  renderIcon() {
  }

  /*
  // сохраняет статью на сервере
  create(event) {

    this.api.createArticle(payload);
  }

  // удаляет карточку
  remove(event) {

    this.api.removeArticle(articleId);
  }
  */
}
