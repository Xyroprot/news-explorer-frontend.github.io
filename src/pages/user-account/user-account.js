/* eslint-disable no-param-reassign */
// используемые аббревиатуры и сокращения:
// template -> tmpl
// content -> cnt
// payload -> pld

import './user-account.css';

import MainApi from '../../js/api/MainApi';

import Header from '../../js/components/Header';
import NewsCardList from '../../js/components/NewsCardList';
import NewsCard from '../../js/components/NewsCard';

import configMain from '../../js/constants/config-main-api';

import wordForm from '../../js/utils/wordForm';

const headerBox = document.querySelector('.header__box');
const title = document.querySelector('.section__title');
const subtitle = document.querySelector('.section__paragraph_text');
const newsCardSection = document.querySelector('.places-list');

const logoutButton = document.querySelector('.user');
const user = logoutButton.querySelector('.button__text');

const tmplCard = document.querySelector('.template__card');

const mainApi = new MainApi(configMain);

const userHeader = new Header(headerBox);
const newsCard = new NewsCard(tmplCard, mainApi);

const saved = ['сохраненная', 'сохраненные', 'сохраненных'];
const artciles = ['статья', 'статьи', 'статьей'];
const others = ['другому', 'другим'];

// отображение элементов секции header

const HeaderStyle = () => {
  mainApi.getUserData()
    .then((data) => {
      userHeader.render({
        isLoggedIn: true,
        userName: data.data.name,
      });
    })
    .catch((err) => console.error(err));
};

// отображение данных о сохраненных пользователем статьях
const ProfileStyle = (amount, articles) => {
  title.textContent = `${user.textContent}, у вас ${amount} ${wordForm(amount, saved)} ${wordForm(amount, artciles)}`;
  const keywords = articles.reduce((prevVal, item) => {
    if (!prevVal[item.keyword]) {
      prevVal[item.keyword] = 1;
    } else {
      prevVal[item.keyword] += 1;
    }
    return prevVal;
  }, {});
  const keys = Object.keys(keywords);
  if (keys.length === 1) {
    subtitle.textContent = `По ключевому слову: ${keys[0]}`;
  } else if (keys.length === 2) {
    subtitle.textContent = `По ключевым словам: ${keys[0]} и ${keys[1]}`;
  } else if (keys.length === 3) {
    subtitle.textContent = `По ключевым словам: ${keys[0]}, ${keys[1]} и ${keys[2]}`;
  } else {
    const left = keys.length - 2;
    subtitle.textContent = `По ключевым словам: ${keys[0]}, ${keys[1]} и ${left} ${wordForm(left, others)}`;
  }
};

// отображает сохраненные статьи в виде карточек
const SavedArticles = () => {
  const newsCardList = new NewsCardList(newsCardSection, newsCard);
  newsCardList.renderLoader(true);
  return mainApi.getArticles()
    .then((data) => {
      if (data.totalResults === 0) {
        return newsCardList.renderError({ noResult: true });
      }
      const array = data.data;
      array.sort((a, b) => {
        const amount = array.reduce((prevVal, item) => {
          if (!prevVal[item.keyword]) {
            prevVal[item.keyword] = 1;
          } else {
            prevVal[item.keyword] += 1;
          }
          return prevVal;
        }, {});

        if (amount[a.keyword] > amount[b.keyword]) {
          return -1;
        }
        if (amount[a.keyword] < amount[b.keyword]) {
          return 1;
        }
        return 0;
      });
      ProfileStyle(array.length, array);
      return newsCardList.renderResults(array);
    })
    .catch((error) => {
      if (error.message === 'Failed to fetch') {
        newsCardList.renderError({ failed: true });
      }
      console.error(error);
    })
    .finally(() => newsCardList.renderLoader());
};

HeaderStyle();
SavedArticles();
