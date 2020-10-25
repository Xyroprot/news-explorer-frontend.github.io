import BaseComponent from './BaseComponent';
import errorMessages from '../constants/error-messages';

const {
  INVALID_MAIL_FORMAT,
  REQUIRED_FIELD,
  INVALID_VALUES_RANGE,
  INVALID_MINIMUM_VALUE,
} = errorMessages;

export default class Form extends BaseComponent {
  constructor(form, api) {
    super();
    this.api = api;
    this.form = form;
    this.button = form.querySelector('.button__popup');
    this.handlerElements = [
      { element: this.form, event: 'input', callBack: this._validateForm },
    ];
  }

  setEventHandlers(handlers) {
    if (handlers) {
      this.handlerElements.unshift(handlers);
    }
    this._setHandlers(this.handlerElements, 'add');
  }

  // добавляет или удаляет ошибку, пришедшую с сервера;
  setServerError(error) {
    this.serverError = this.form.querySelector('.server_error');
    if (error) {
      this.serverError.textContent = `${error}`;
      return this.serverError.textContent;
    }
    this._clear();
    this.serverError.textContent = '';
    return this.serverError.textContent;
  }

  // валидирует переданный в качестве аргумента инпут;
  _validateInputElement(event) {
    this.inputElement = event.target;
    this.errorElement = event.target.nextElementSibling.querySelector('.popup__text_error');
    if (this.inputElement.validity.typeMismatch) {
      this.errorElement.textContent = INVALID_MAIL_FORMAT;
      return this.errorElement.textContent;
    }
    if (this.inputElement.validity.valueMissing) {
      this.errorElement.textContent = REQUIRED_FIELD;
      return this.errorElement.textContent;
    }
    if (this.inputElement.validity.tooLong || this.inputElement.validity.tooShort) {
      if (this.inputElement.name === 'password') {
        this.errorElement.textContent = INVALID_MINIMUM_VALUE;
        return this.errorElement.textContent;
      }
      this.errorElement.textContent = INVALID_VALUES_RANGE;
      return this.errorElement.textContent;
    }
    this.errorElement.textContent = '';
    return this.errorElement.textContent;
  }

  // валидирует всю форму;
  _validateForm(event) {
    this._validateInputElement(event);
    this.button.disabled = !this.form.checkValidity();
  }

  // вспомогательный метод, очищает поля формы и деактивирует кнопку;
  _clear() {
    this.form.reset();
    this.button.disabled = true;
  }
}
