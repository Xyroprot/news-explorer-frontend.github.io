import BaseComponent from './BaseComponent';

export default class NewsCard extends BaseComponent { // Класс карточки новости
  constructor(template, api) {
    super();
    this.template = template;
    this.api = api;
  }

  // сохранеят или удаляет
  toggleCard(event) {
    this.card = event.target.closest('.place-card');
    const payload = {
      keyword: this.card.querySelector('.place-card__info_category').textContent,
      title: this.card.querySelector('.place-card__title').textContent,
      text: this.card.querySelector('.place-card__text').textContent,
      date: this.card.querySelector('.place-card__date').textContent,
      source: this.card.querySelector('.place-card__source').textContent,
      link: this.card.querySelector('.place-card__preview').href,
      image: this.card.querySelector('.place-card__image').dataset.url,
    };

    if (window.location.pathname === '/user-account.html') {
      this.api.removeArticle(this.card.querySelector('.place-card__preview').dataset.id)
        .then(() => {
          this.layout.removeChild(this.card);
          window.location.reload();
        })
        .catch((error) => console.error(error));
    } else {
      if (!event.target.classList.contains('place-card__icon_bookmark_marked')) {
        this.api.createArticle(payload)
          .then((data) => {
            this.id = data.data._id;
          })
          .catch((error) => console.error(error));
      } else {
        this.api.removeArticle(this.id)
          .then((data) => data)
          .catch((error) => console.error(error));
      }
      event.target.classList.toggle('place-card__icon_bookmark_marked');
    }
  }

  // отрисовывает иконку карточки
  renderIcon() {
    this.icon = this.template.content.querySelector('.icon_toggle');
    this.ntf = this.template.content.querySelector('.place-card__icon_notification');

    this.api.getUserData()
      .then(() => {
        this.ntf.style.display = 'none';
        this.icon.removeAttribute('disabled');
      })
      .catch((error) => {
        this.ntf.style.display = '';
        if (!this.icon.hasAttribute('disabled')) {
          this.icon.setAttribute('disabled', true);
        }
        console.error(error);
      });
  }

  // отрисовывает карточку
  renderCard(article, layout) {
    this.article = article;
    this.layout = layout;
    const {
      keyword, title, text, date, source, link, image,
    } = this.article;

    this.content = this.template.content;
    if (window.location.pathname === '/index.html') {
      this.content.querySelector('.place-card__icon_tag').style.display = 'none';
    }
    if (this.article._id) {
      this.content.querySelector('.place-card__preview').dataset.id = this.article._id;
    }
    this.content.querySelector('.place-card__preview').href = link;
    this.content.querySelector('.place-card__info_category').textContent = keyword;
    this.content.querySelector('.place-card__image').style = `background-image: url(${image})`;
    this.content.querySelector('.place-card__image').dataset.url = image;
    this.content.querySelector('.place-card__date').textContent = date;
    this.content.querySelector('.place-card__title').textContent = title;
    this.content.querySelector('.place-card__text').textContent = text;
    this.content.querySelector('.place-card__source').textContent = source;
    this.layout.appendChild(this.content.cloneNode(true));
  }

  // устанавливает обработчик событий на добавляемые карточки
  setEventHandlers() {
    this.icons = this.layout.querySelectorAll('.icon_toggle');
    this.icons.forEach((item, i, arr) => {
      if (i >= arr.length - 3) {
        this._setHandlers([{
          element: arr[i],
          event: 'click',
          callBack: this.toggleCard,
        }], 'add');
      }
    });
  }
}
