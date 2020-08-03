export default class Popup {
  constructor(popup) {
    this.popup = popup;
    this.eventClose(popup);
  }

  setContent() {

  }

  clearContent() {

  }

  open() {

  }

  close(event) { // для закрытия всплывающего окна
    event.target.closest('.popup').classList.remove('popup_is-opened');
    event.target.closest('.popup__close').removeEventListener('click', this.close.bind(this));
  }
}
