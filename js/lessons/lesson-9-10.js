'use strict'
console.log('Урок 9-10 DOM и События')

const navEl = document.querySelector('.nav-list');
console.log(navEl.classList);

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

const btnEl = document.querySelector('.btn'); 
// btnEl.addEventListener('click', () => {
//     navEl.classList.add('click-btn', 'class')
// });
// navEl.classList.remove('class');
navEl.classList.replace('nav-list', 'class');
console.log(navEl.classList.contains('class'));



// btnEl.addEventListener('click', () => {
//     navEl.classList.toggle('click-btn')
// });