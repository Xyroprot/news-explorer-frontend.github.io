export default class Header {
  constructor() {
  }

  render(props) {
    const { isLoggedIn, userName } = props;
    this.props = props;
  }
}

/*
Методы у класса Header такие:
render - перерисовывает шапку в зависимости от переданного аргумента — объекта props.
У этого объекта есть два обязательных свойства:
isLoggedIn — залогинен ли пользователь;
userName — имя, которое отображается в шапке залогиненного пользователя
*/
