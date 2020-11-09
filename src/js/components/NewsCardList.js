/* eslint-disable no-return-assign */
import BaseComponent from './BaseComponent';

import errorMessages from '../constants/error-messages';
import configDafault from '../constants/config-default';
import dateFormat from '../utils/dateFormat';

const {
  REQUESR_ERROR,
  REQUESR_ERROR_MESSAGE,
  NO_RESULTS,
  NO_RESULTS_MESSAGE,
} = errorMessages;

const {
  CARDS,
} = configDafault;

export default class NewsCardList extends BaseComponent { // Класс списка карточек новостей.
  constructor(cardSection, cardElement) {
    super();
    this.cardSection = cardSection;
    this.cardElement = cardElement;

    this.results = this.cardSection.querySelector('.places-list__response');

    this.articles = this.results.querySelector('.places-list__articles');
    this.showButton = this.results.querySelector('.places-list__button');
    this.cardSection.classList.add('places-list_on');

    this.renderError(false);
    this.handlerElements = [
      { element: this.results.querySelector('.places-list__button'), event: 'click', callBack: this.renderMore },
    ];
  }

  // принимает массив экземпляров карточек и отрисовывает первые три карточки;
  renderResults(array) {
    this.results.classList.add('places-list__response_on');
    this.array = array;
    array.forEach((item, index, arr) => {
      this.index = index;
      if (window.location.pathname === '/user-account.html') {
        this.cardElement.renderCard(arr[index], this.articles);
      } else {
        if (arr.length > CARDS) {
          this.showMore(true);
        }
        if (index < CARDS) {
          this.cardElement.renderCard(arr[index], this.articles);
          this.previousValue = 3;
        }
      }
    });
    this.cardElement.setEventHandlers();
  }

  // отрисовыет дополнительные карточки, если они есть
  renderMore() {
    for (let i = this.previousValue; i < this.previousValue + CARDS; i += 1) {
      if (this.array[i]) {
        this.cardElement.renderCard(this.array[i], this.articles);
      } else {
        this.showMore(false);
      }
    }
    this.previousValue += CARDS;
    this.cardElement.setEventHandlers();
  }

  // отвечает за отрисовку лоудера;
  renderLoader(isLoading) {
    this.spinner = this.cardSection.querySelector('.places-list__processing');
    if (isLoading) {
      if (this.articles.hasChildNodes()) {
        this._setHandlers(this.handlerElements);
        this.articles.textContent = '';
        this.results.classList.remove('places-list__response_on');
      }
      return this.spinner.classList.add('places-list__processing_on');
    }
    return this.spinner.classList.remove('places-list__processing_on');
  }

  // принимает объект ошибки и показывает ошибку в интерфейсе;
  renderError(response) {
    this.response = response;
    this.error = this.cardSection.querySelector('.places-list__error');
    this.errorTitle = this.error.querySelector('.section__title');
    this.errorSubtitle = this.error.querySelector('.section__paragraph');
    if (this.response.failed) {
      this.errorTitle.textContent = REQUESR_ERROR;
      this.errorSubtitle.textContent = REQUESR_ERROR_MESSAGE;
      return this.error.classList.add('places-list__error_on');
    } if (this.response.noResult) {
      this.errorTitle.textContent = NO_RESULTS;
      this.errorSubtitle.textContent = NO_RESULTS_MESSAGE;
      return this.error.classList.add('places-list__error_on');
    }
    return this.error.classList.remove('places-list__error_on');
  }

  // отвечает за функциональность кнопки «Показать ещё»;
  showMore(status) {
    this.status = status;
    if (this.status) {
      if (this.showButton.classList.contains('places-list__button_on')) {
        return this.showButton;
      }
      this._setHandlers(this.handlerElements, 'add');
      return this.showButton.classList.add('places-list__button_on');
    }
    if (this.showButton.classList.contains('places-list__button_on')) {
      return this.showButton.classList.remove('places-list__button_on');
    }
    return this.showButton;
  }

  // принимает массив статей, перерабатывает и добавляет их в список.
  addCard(data, requestWord) {
    this.data = data;
    this.cardList = [];
    this.data.forEach((item) => {
      const pattern = {
        keyword: requestWord,
        title: item.title,
        text: item.description,
        date: dateFormat(item.publishedAt),
        source: item.source.name,
        link: item.url,
        image: item.urlToImage,
      };
      this.cardList.push(pattern);
    });
    this.renderResults(this.cardList);
  }
}
