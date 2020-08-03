export default class Form {
  constructor(popupElement) {
    this.setEventListeners(popupElement);
  }

  // добавляет форме ошибку, пришедшую с сервера;
  setServerError() {

  }

  // показывает ошибку, если инпуты не проходят валидацию
  _validateInputElement(inputElement, errorElement) {
    if (inputElement.validity.typeMismatch) {
      errorElement.textContent = 'Здесь должна быть ссылка';
      return errorElement.textContent;
    }
    if (inputElement.validity.valueMissing) {
      errorElement.textContent = 'Это обязательное поле';
      return errorElement.textContent;
    }
    if (inputElement.validity.tooLong || inputElement.validity.tooShort) {
      errorElement.textContent = 'Должно быть от 2 до 30 символов';
      return errorElement.textContent;
    }
    errorElement.textContent = '';
    return errorElement.textContent;
  }

  // делать кнопку сабмита активной или неактивной
  _setSubmitButtonState(form, button) {
    button.disabled = !form.checkValidity();
  }

  // функция вызывает в теле checkInputValidity и setSubmitButtonState
  // для валидации заполняемой формы и активации кнопки submit
  _validateForm(event) {
    const form = event.target.parentElement; // реадактируемая форма
    const submitButton = form.querySelector('.popup__button'); // кнопка подтверждения внесенных изменений
    this._validateInputElement(event.target, event.target.nextElementSibling);
    this._setSubmitButtonState(form, submitButton);
  }

  // добавляет необходимые для валидации обработчики всем полям формы
  setEventListeners(popup) {
    const form = popup.querySelector('.popup__form'); // форма редактирования профиля
    form.addEventListener('input', this.validate.bind(this));
  }

  _clear() { // вспомогательный метод, очищает поля формы;

  }

  _getInfo() { //вспомогательный метод, возвращает данные формы.

  }
}