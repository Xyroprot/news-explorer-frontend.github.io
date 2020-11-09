import BaseComponent from './BaseComponent';

export default class Popup extends BaseComponent {
  constructor(popup, ...template) {
    super();
    this.popup = popup;
    this.contentElements = this.popup.querySelectorAll('.popup__content');
    this.contentElement = this.popup.querySelector('.popup__content');
    this.template = template;
    this.setContent();
  }

  // вставляет в попап содержимое, например, форму входа или сообщение об успешной регистрации;
  setContent() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.template.length; i++) {
      this.contentElements.forEach(() => {
        document.adoptNode(this.template[i].content, true);
        this.contentElements[i].appendChild(this.template[i].content);
      });
    }
    this.handlerElements = [
      { element: this.popup, event: 'click', callBack: this.close },
      { element: window, event: 'keydown', callBack: this.close },
      { element: this.popup.querySelector('.switcher_sign-in'), event: 'click', callBack: this.switchContent },
      { element: this.popup.querySelector('.switcher_sign-up'), event: 'click', callBack: this.switchContent },
      { element: this.popup.querySelector('.switcher_signed'), event: 'click', callBack: this.switchContent },
    ];
    this._setHandlers(this.handlerElements, 'add');
  }

  // скрывает содержимое попапа;
  clearContent(content) {
    this.content = content;
    content.classList.remove('content_is-opened');
  }

  // меняет содержимое попапа;
  switchContent(event) {
    this.currentContent = event.target.closest('.popup__content');
    this.clearContent(this.currentContent);
    if (this.currentContent.classList.contains('content__sign-in')) {
      this.popup.querySelector('.content__sign-up').classList.add('content_is-opened');
    } else {
      this.popup.querySelector('.content__sign-in').classList.add('content_is-opened');
    }
  }

  // открывает попап;
  open(contetnSigned) {
    this.popup.classList.add('popup_is-opened');
    if (contetnSigned) {
      this.contetnSigned = contetnSigned;
      return this.contetnSigned.classList.add('content_is-opened');
    }
    return this.contentElement.classList.add('content_is-opened');
  }

  // закрывает попап;
  close(event) {
    if (
      event.key === 'Escape'
      || event.target.classList.contains('popup')
      || event.target.classList.contains('popup__close')
    ) {
      this._setHandlers(this.handlerElements);
      this.clearContent(this.popup.querySelector('.content_is-opened'));
      this.popup.classList.remove('popup_is-opened');
    }
  }
}
