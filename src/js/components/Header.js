export default class Header {
  constructor(header) {
    this.header = header;
    this.buttonMain = this.header.querySelector('.main');
    this.buttonSaved = this.header.querySelector('.saved');
    this.buttonAuth = this.header.querySelector('.auth');
    this.buttonUser = this.header.querySelector('.user');
    this.buttonUserLogin = this.buttonUser.querySelector('.button__text');
    this.render({ isLoggedIn: false });
  }

  render(props) {
    this.props = props;
    const { isLoggedIn, userName } = this.props;
    if (isLoggedIn) {
      this.buttonAuth.classList.remove('menu__button_on');
      this.buttonSaved.classList.add('menu__button_on');
      this.buttonUser.classList.add('menu__button_on');
      this.buttonUserLogin.textContent = `${userName}`;
      return this.buttonUserLogin.textContent;
    }
    this.buttonAuth.classList.add('menu__button_on');
    this.buttonSaved.classList.remove('menu__button_on');
    this.buttonUser.classList.remove('menu__button_on');
    return this.buttonUserLogin.textContent;
  }

  setStyle() {
    if (window.matchMedia('(max-width: 400px)').matches) {
      this.header.classList.toggle('header__box_theme_dark');
      this.header.classList.toggle('header__box_theme_dark-popup');
    }
  }
}

/*
Методы у класса Header такие:
render - перерисовывает шапку в зависимости от переданного аргумента — объекта props.
У этого объекта есть два обязательных свойства:
isLoggedIn — залогинен ли пользователь;
userName — имя, которое отображается в шапке залогиненного пользователя
*/
