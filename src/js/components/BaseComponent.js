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
У класса BaseComponent есть constructor.
Он вызывает приватный метод _setHandlers.
Этот метод добавляет обработчики конкретным элементам.
*/
