// используемые аббревиатуры и сокращения:
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
import errorMessages from '../js/constants/error-messages';

import dateFormat from '../js/utils/dateFormat';

const {
  REQUIRED_KEYWORD,
} = errorMessages;

const headerBox = document.querySelector('.header__box');
const popupElement = document.querySelector('.popup');
const newsCardSection = document.querySelector('.places-list');

const loginButton = document.querySelector('.menu__item_header-login');

const tmplLogin = document.querySelector('.template__popup_sign-in');
const tmplSignup = document.querySelector('.template__popup_sign-up');
const tmplSigned = document.querySelector('.template__popup_signed');
const tmplCard = document.querySelector('.template__card');

const mainApi = new MainApi(configMain);
const newsApi = new NewsApi(configNews);

const popup = new Popup(popupElement, tmplLogin, tmplSignup, tmplSigned);
const indexHeader = new Header(headerBox);
const newsCard = new NewsCard(tmplCard, mainApi);

const cntSearch = document.forms.search;
const cntLogin = document.forms.signIn;
const cntSignup = document.forms.signUp;

const formLogin = new Form(cntLogin, mainApi);
const formSignup = new Form(cntSignup, mainApi);
const formSearch = new Form(cntSearch, newsApi);

// отображение элементов секции header
const HeaderStyle = () => {
  mainApi.getUserData()
    .then((data) => {
      indexHeader.render({
        isLoggedIn: true,
        userName: data.data.name,
      });
    })
    .catch((err) => console.error(err));
};

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
    .then(() => HeaderStyle(event))
    .catch((err) => {
      err
        .then((data) => formLogin.setServerError(data.message));
      console.error(err);
    });
};

// отображение полученных объектов статей в виде карточек
const CardRender = (data, request) => {

};

// обработка поискового запроса с использованием NewsApi
const Search = (event) => {
  event.preventDefault();
  const request = {
    keyword: cntSearch.elements.request.value,
  };
  if (!request.keyword) {
    return formSearch.setServerError(REQUIRED_KEYWORD);
  }
  const newsCardList = new NewsCardList(newsCardSection, newsCard);
  newsCardList.renderLoader(true);
  return newsApi.getNews(request.keyword)
    .then((data) => {
      if (data.totalResults === 0) {
        newsCardList.renderError({ noResult: true });
      }
      data.articles.forEach((item) => {
        const content = {
          keyword: request.keyword,
          title: item.title,
          text: item.description,
          date: dateFormat(item.publishedAt),
          source: item.source.name,
          link: item.url,
          image: item.urlToImage,
        };
        newsCardList.addCard(content);
      });
    })
    .catch((error) => {
      if (error.message === 'Failed to fetch') {
        newsCardList.renderError({ failed: true });
      }
      console.error(error);
    })
    .finally(() => newsCardList.renderLoader());
};

formSignup.setEventHandlers({ element: cntSignup, event: 'submit', callBack: Signup });
formLogin.setEventHandlers({ element: cntLogin, event: 'submit', callBack: Login });
formSearch.setEventHandlers({ element: cntSearch, event: 'submit', callBack: Search });

// отредактировать позже
const openPopup = () => {
  popup.open();
};

loginButton.addEventListener('click', openPopup);
indexHeader.setStyle();
