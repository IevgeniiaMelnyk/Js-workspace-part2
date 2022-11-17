import products from "../products.js";
import transactions from "../transactions.js";
import transactionHistory from "../transactions.js";
// console.log(products);
// console.log(transactionHistory);
'use strict'
console.log('Урок 10-11 DOM и События');

// const navEl = document.querySelector('.nav-list');
// console.log(navEl.classList);

// const navLinkEl = navEl.querySelectorAll('.nav-item-link');
// const navLinkEl = document.querySelectorAll('.nav-item-link');
// console.log(navLinkEl);
// const btnEl = document.querySelector('.btn');
// btnEl.addEventListener('click', () => {
    // const nosEl = document.querySelector('.nos');
    // console.log(nosEl.src);
    // nosEl.src = "./img/nos2.jpg"
// });

// const titleEl = document.querySelector('.title');
// console.log(titleEl.textContent);
// titleEl.textContent = 'Я Носик пёсик!';

// console.log(nosEl.getAttribute('src'))
// console.log(nosEl.hasAttribute('src'))
// nosEl.removeAttribute('src');

// const actionEl = document.querySelectorAll('.js-action button');
// console.log(actionEl[0].dataset);
// console.log(actionEl[1].dataset.action);
// console.log(actionEl[2].dataset.action);
// const addActionEl = document.querySelector('')

// btnEl.addEventListener('click', () => {
//     const inputEl = document.querySelector('.js-input');
//     console.log(inputEl.value);
//     inputEl.value = "trrrrrrr"
// })

// const btnEl = document.querySelector('.btn');
// btnEl.addEventListener('click', () => {
//     navEl.classList.add('click-btn', 'class')
// });
// navEl.classList.remove('class');
// navEl.classList.replace('nav-list', 'class');
// console.log(navEl.classList.contains('class'));

// btnEl.addEventListener('click', () => {
//     navEl.classList.toggle('click-btn')
// });

// const currentPageUrl = '/portfolio';
// const linkEl = document.querySelector(`.nav-item-link[href='${currentPageUrl}']`);
// console.log(linkEl);
// linkEl.classList.add('nav-item-link--current');

// console.log(navEl.firstElementChild);
// console.log(navEl.children);
// console.log(navEl.lastElementChild);

// const newTitleEl = document.createElement('h1');
// newTitleEl.classList.add('new-title');
// newTitleEl.textContent = 'Меня зовут Носик';

// console.log(newTitleEl);
// console.log(document.body);
// document.body.appendChild(newTitleEl);

// const newImgEl = document.createElement('img');
// newImgEl.classList.add('new-img');
// newImgEl.src = '/img/nos2.jpg';
// newImgEl.alt = 'Nos';
// newImgEl.width = 200;
// document.body.appendChild(newImgEl);
// console.log(newImgEl);

// const newItemEl = document.createElement('li');
// newItemEl.classList.add('nav-item');

// const newLinkEl = document.createElement('a');
// newLinkEl.classList.add('nav-item-link');
// newLinkEl.textContent = 'Личный кабинет';
// newLinkEl.href = '/profile';

// newItemEl.appendChild(newLinkEl);
// console.log(newItemEl);

// navEl.appendChild(newItemEl);
// navEl.insertBefore(newLinkEl, navEl.lastElementChild);
// navEl.insertBefore(newLinkEl, navEl.children[1]);


// const navEl = document.querySelector('.nav-list');
// const newHeroEl = document.querySelector('.hero');

// const newTitleEl = document.createElement('h1');
// newTitleEl.classList.add('new-title');
// newTitleEl.textContent = 'Меня зовут Носик';

// const newImgEl = document.createElement('img');
// newImgEl.classList.add('new-img');
// newImgEl.src = '/img/nos2.jpg';
// newImgEl.alt = 'Nos';
// newImgEl.width = 100;

// newHero.appendChild(newTitleEl);
// newHero.appendChild(newImgEl);
// newHeroEl.append(newTitleEl, newImgEl);



// const colorPickerOption = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#507D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];
// const colorPickerOptionEl = document.querySelector('.js-colorPicker');

// const elements = colorPickerOption.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('colorPicker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     return buttonEl;
// });
// console.log(elements);
// colorPickerOptionEl.append(...elements);

// const makeColorPickerOptions = options => {
//     return options.map(option => {
//         const buttonEl = document.createElement('button');
//         buttonEl.type = 'button';
//         buttonEl.classList.add('colorPicker__option');
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;

//         return buttonEl;
//     });
// };
// const elements = makeColorPickerOptions(colorPickerOption);
// colorPickerOptionEl.append(...elements);

// const product = {
//     name: 'Servoprivod',
//     description:
//         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nobis optio ducimus, ipsum culpa quo voluptates, ad quidem dolorem itaque consequatur maiores corporis error placeat laboriosam doloremque minima, sunt mollitia.',
//     price: 2000,
//     available: true,
//     onSale: true,
// };

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Price: ${product.price}`;
// priceEl.classList.add('product__price');

// console.log(productEl);
// console.log(nameEl);
// console.log(descrEl);
// console.log(priceEl);

// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);

// const productsContainerEl = document.querySelector('.js-products');

// const makeProductCard = ({ name, description, price }) => {
//     const productEl = document.createElement('article');
//     productEl.classList.add('product');

//     const nameEl = document.createElement('h2');
//     nameEl.textContent = name;
//     nameEl.classList.add('product__name');

//     const descrEl = document.createElement('p');
//     descrEl.textContent = description;
//     descrEl.classList.add('product__descr');

//     const priceEl = document.createElement('p');
//     priceEl.textContent = `Price: ${price}`;
//     priceEl.classList.add('product__price');
    
//     productEl.append(nameEl, descrEl, priceEl);
//     return productEl;
// };

// console.log(makeProductCard(products[0]))

// const elements = products.map(makeProductCard);
// console.log(elements)
// productsContainerEl.append(...elements);

// const titleEl = document.querySelector('.title');
// console.log(titleEl.textContent);
// console.log(titleEl.innerHTML);

// += так делать нельзя!!!
// titleEl.innerHTML += '<a href=""> Это ссылка<a>';
// = так можно!!!
// titleEl.innerHTML = '<a href="">Это ссылка<a>';
// так можно очистить тег!!!
// titleEl.innerHTML = '';

// добавить инлайн разметку...
// titleEl.insertAdjacentHTML('beforebegin', '<a href=""> Это ссылка<a>')
// titleEl.insertAdjacentHTML('beforeend', '<a href=""> Это ссылка<a>')
// titleEl.insertAdjacentHTML('afterbegin', '<a href=""> Это ссылка<a>')
// titleEl.insertAdjacentHTML('afterend', '<a class= "title__link" href=""> Это ссылка<a>')

// const makeTransactionTableRowMarkup = ({ id, amount, date, business, type, name, account }) => {
//     return `
//     <tr>
//           <td>${id}</td>
//           <td>${amount}</td>
//           <td>${date}</td>
//           <td>${business}</td>
//           <td>${type}</td>
//           <td>${name}</td>
//           <td>${account}</td>
//         </tr>
//     `
// };

// console.log(transactionHistory);
// console.log(makeTransactionTableRowMarkup(transactionHistory[0]))
// const tableEl = document.querySelector('.js-transaction-table');

// const makeTransactionTableRows = transactionHistory
//     .map(makeTransactionTableRowMarkup).join('');

// tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);

// console.log(makeTransactionTableRows);

// События////////////////////////////////////////

// const buttonEl = document.querySelector('.js-btn1');

// buttonEl.addEventListener('click', handleTargetButtonClick)
// function handleTargetButtonClick() {
//     console.log('click')
// }
// const addListenerBtn = document.querySelector('.js-btn2');
// const removeListenerBtn = document.querySelector('.js-btn3');

// addListenerBtn.addEventListener('click', (event) => {
//     console.log('Вешаю слушателя событий');
//     buttonEl.addEventListener('click', handleTargetButtonClick);
// });

// removeListenerBtn.addEventListener('click', (event) => {
//     console.log('Снимаю слушателя событий');
//     buttonEl.removeEventListener('click', handleTargetButtonClick);
// });

// function handleTargetButtonClick(event) {
//     console.log(event);
//     console.log('Клик по кнопке');
// };

// Форма

// const form = document.querySelector('.js-register-form');
// form.addEventListener('submit', onFormSubmit);
// function onFormSubmit(event) {
//     event.preventDefault();
//     // console.dir(event.currentTarget.elements);

//     const formData = new FormData(event.currentTarget);
//     console.log(formData);

//     formData.forEach((value, name) => {
//         console.log(value)
//         console.log(name)
//     })
// };

/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

// const refs = {
//   input: document.querySelector('.js-input'),
//   nameLabel: document.querySelector('.js-button > span'),
//   licenseCheckbox: document.querySelector('.js-license'),
//   btn: document.querySelector('.js-button'),
// };

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);

// refs.input.addEventListener('input', onInputChange);
// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// function onInputFocus() {
//   console.log('Инпут получил фокус - событие focus');
// }

// function onInputBlur() {
//   console.log('Инпут потерял фокус - событие blur');
// }

// function onInputChange(event) {
//   refs.nameLabel.textContent = event.currentTarget.value;
// }

// function onLicenseChange(event) {
//   refs.btn.disabled = !event.currentTarget.checked;
// }

/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

// const refs = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keypress', onKeypress);
// refs.clearBtn.addEventListener('click', onClearOutput);

// function onKeypress(event) {
  // console.log('event.key: ', event.key);
  // console.log('event.code: ', event.code);

//   refs.output.textContent += event.key;
// }

// function onClearOutput() {
//   refs.output.textContent = '';
// }

/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter(event) {
//   const box = event.currentTarget;
//   box.classList.add('box--active');
// }

// function onMouseLeave(event) {
//   const box = event.currentTarget;
//   box.classList.remove('box--active');
// }

// function onMouseMove(event) {
//   console.log(event);
// }

/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    console.log('Кликнули именно в бекдроп!!!!');
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}



