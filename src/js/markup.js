import ListTemplate from '../templates/list-countries.hbs';
import countryTemplate from '../templates/country.hbs';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  country: document.querySelector('.country'),
  listCountries: document.querySelector('.list-countries'),
};

function markupCountry(coutry) {
  clearInput();
  if (1 < coutry.length && coutry.length < 10) {
    const markup = ListTemplate(coutry);
    refs.listCountries.insertAdjacentHTML('beforeend', markup);
  } else if (coutry.length === 1) {
    const markup = countryTemplate(coutry);
    refs.country.insertAdjacentHTML('beforeend', markup);
  } else if (coutry.length > 10) {
    error(
      'Найдено слишком много совпадений. Пожалуйста, введите более конкретный запрос!',
    );
  }
}

function clearInput() {
  refs.country.innerHTML = '';
  refs.listCountries.innerHTML = '';
}

export default markupCountry;
