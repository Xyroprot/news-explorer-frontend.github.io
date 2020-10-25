export default class BaseComponent {
  constructor() {
    this._setHandlers = this._setHandlers.bind(this);
  }

  _setHandlers(handlerElements, condition) {
    handlerElements.forEach(({ element, event, callBack }) => {
      const handler = callBack.bind(this);
      if (condition === 'add') {
        element.addEventListener(event, handler);
      } else {
        element.removeEventListener(event, handler);
      }
    });
  }
}
/*
У класса BaseComponent должен быть метод constructor.
Он принимает на вход массив обработчиков событий и вызывает приватный метод _setHandlers.
Этот метод добавляет обработчики конкретным элементам.
*/
