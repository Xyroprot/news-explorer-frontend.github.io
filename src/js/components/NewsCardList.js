import errorMessages from '../constants/error-messages';

const {
  REQUESR_ERROR,
  REQUESR_ERROR_MESSAGE,
  NO_RESULTS,
  NO_RESULTS_MESSAGE,
} = errorMessages;

export default class NewsCardList { // Класс списка карточек новостей.
  constructor(cardSection, cardElement) {
    this.cardSection = cardSection;
    this.cardElement = cardElement;
    this.results = this.cardSection.querySelector('.places-list__response');
    this.articles = this.results.querySelector('.places-list__articles');
    this.cardSection.classList.add('places-list_on');
    this.renderError(false);
  }

  // отвечает за функциональность кнопки «Показать ещё»;
  showMore() {
    this.showButton = this.articles.querySelector('.places-list__button');
    this.showButton.classList.toggle('places-list__button_on');
  }

  // принимает массив экземпляров карточек и отрисовывает их;
  renderResults(array) {
    this.results.classList.add('places-list__response_on');

    this.array = array;
    array.forEach((item, i, arr) => {
      this.cardElement.renderCard(item, this.articles);
      console.log(arr.length);
      if (arr.length > 3) {
        this.showMore();
      }
    });
  }

  // отвечает за отрисовку лоудера;
  renderLoader(isLoading) {
    this.spinner = this.cardSection.querySelector('.places-list__processing');
    if (isLoading) {
      if (this.articles.hasChildNodes()) {
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

  // принимает экземпляр карточки и добавляет её в список.
  addCard(pattern) {
    this.pattern = pattern;
    this.cardList = [];
    this.cardList.push(this.pattern);
    this.renderResults(this.cardList);
  }
}
