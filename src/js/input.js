import debounce from 'lodash.debounce';
import markupCountry from './markup';
import getCountry from './fetch';

const refs = {
  inputCountry: document.querySelector('.input-country'),
};

let nameCoutry = '';

refs.inputCountry.addEventListener(
  'input',
  debounce(() => {
    nameCoutry = refs.inputCountry.value;
    if (nameCoutry !== '') {
      getCountry(nameCoutry).then(markupCountry);
    }
  }, 500),
);
