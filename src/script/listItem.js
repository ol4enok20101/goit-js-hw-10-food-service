import listTemplate from '../templates/listItem.hbs';
import listData from '../menu.json';

const jsMenu = document.querySelector('ul.js-menu');
const value = listTemplate(listData);

jsMenu.insertAdjacentHTML('beforeend', value);
