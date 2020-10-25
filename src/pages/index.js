// используемые абревеатуры и скоращения
// template -> tmpl
// content -> cnt
// payload -> pld

import './index.css';

import MainApi from '../js/api/MainApi';
import NewsApi from '../js/api/NewsApi';

import Header from '../js/components/Header';
import Popup from '../js/components/Popup';
import Form from '../js/components/Form';
import NewsCardList from '../js/components/NewsCardList';
import NewsCard from '../js/components/NewsCard';

import configMain from '../js/constants/config-main-api';
import configNews from '../js/constants/config-news-api';

const popupElement = document.querySelector('.popup');

const tmplLogin = document.querySelector('.template__popup_sign-in');
const tmplSignup = document.querySelector('.template__popup_sign-up');
const tmplSigned = document.querySelector('.template__popup_signed');

const loginButton = document.querySelector('.menu__item_header-login'); // позже переименовать

const mainApi = new MainApi(configMain);
const newsApi = new NewsApi(configNews);

const popup = new Popup(popupElement, tmplLogin, tmplSignup, tmplSigned);
const indexHeader = new Header({  });

const cntSearch = document.forms.search;
const cntLogin = document.forms.signIn;
const cntSignup = document.forms.signUp;

const formLogin = new Form(cntLogin, mainApi);
const formSignup = new Form(cntSignup, mainApi);

// регистрация нового пользователя
const Signup = (event) => {
  event.preventDefault();
  const payload = {
    email: cntSignup.elements.email.value,
    name: cntSignup.elements.login.value,
    password: cntSignup.elements.password.value,
  };

  mainApi.signup(payload)
    .then(() => {
      formSignup.setServerError();
      popup.clearContent(document.querySelector('.content__sign-up'));
      return popup.open(document.querySelector('.content__signed'));
    })
    .catch((err) => {
      console.error(err);
      err
        .then((data) => formSignup.setServerError(data.message));
    });
};

// аутентификация пользователя на основе почты и пароля
const Login = (event) => {
  event.preventDefault();
  const payload = {
    email: cntLogin.elements.email.value,
    password: cntLogin.elements.password.value,
  };

  mainApi.signin(payload)
    .then(() => {
      formLogin.setServerError();
      return popupElement.classList.remove('popup_is-opened');
    })
    .catch((err) => {
      console.error(err);
      err
        .then((data) => formLogin.setServerError(data.message));
    });
};

formSignup.setEventHandlers({ element: cntSignup, event: 'submit', callBack: Signup });
formLogin.setEventHandlers({ element: cntLogin, event: 'submit', callBack: Login });

// отредактировать позже
const openPopup = () => {
  popup.open();
};

loginButton.addEventListener('click', openPopup);
