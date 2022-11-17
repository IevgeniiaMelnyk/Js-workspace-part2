/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle
 */
// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', _.throttle(onMouseMove, 250));

// function onMouseMove(event) {
//   mouseMoveCbInvocationCounter += 1;

//   coordsOutputRef.textContent = `
//     Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
//     X: ${event.clientX},
//     Y:${event.clientY}
//   `;
// }

/*
 * Input и debounce
 */
// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCbInvocationCounter = 0;

// inputRef.addEventListener('input', _.debounce(onInputChange, 300));

// function onInputChange(event) {
//   inputCbInvocationCounter += 1;

//   outputRef.textContent = `
//     Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
//     Значение: ${event.target.value}
//   `;
// };

// const tech = [
//   { label: 'HTML' },
//   { label: 'CSS' },
//   { label: 'JavaScript' },
//   { label: 'Node.js' },
//   { label: 'React' },
//   { label: 'Vue' },
//   { label: 'Next.js' },
//   { label: 'Mobx' },
//   { label: 'Redux' },
//   { label: 'React Router' },
//   { label: 'GraphQl' },
//   { label: 'PostgreSQL' },
//   { label: 'MongoDB' },
// ];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

// const refs = {
//   list: document.querySelector('.js-list'),
//   input: document.querySelector('#filter'),
// };

// refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

// const listItemsMarkup = createListItemsMarkup(tech);
// populateList(listItemsMarkup);

// function createListItemsMarkup(items) {
//   return items.map(item => `<li>${item.label}</li>`).join('');
// }

// function onFilterChange(evt) {
//   console.log('INPUT');
//   const filter = evt.target.value.toLowerCase();

//   const filteredItems = tech.filter(t =>
//     t.label.toLowerCase().includes(filter),
//   );

//   const listItemsMarkup = createListItemsMarkup(filteredItems);
//   populateList(listItemsMarkup);
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }


// const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// lazyImages.forEach(image => {
//   image.addEventListener('load', onImageLoaded, { once: true });
// });

// function onImageLoaded(evt) {
//   console.log('Картинка загрузилась');
//   evt.target.classList.add('appear');
// };

/*
 * Библиотека lazysizes
 * - feature detection
 */

// if ('loading' in HTMLImageElement.prototype) {
//   console.log('Браузер поддерживает lazyload');
//   addSrcAttrToLazyImages();
// } else {
//   console.log('Браузер НЕ поддерживает lazyload');
//   addLazySizesScript();
// }

// const lazyImages = document.querySelectorAll('img[data-src]');

// lazyImages.forEach(image => {
//   image.addEventListener('load', onImageLoaded, { once: true });
// });

// function onImageLoaded(evt) {
//   console.log('Картинка загрузилась');
//   evt.target.classList.add('appear');
// }

// function addLazySizesScript() {
//   const script = document.createElement('script');
//   script.src =
//     'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
//   script.integrity =
//     'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
//   script.crossOrigin = 'anonymous';

//   document.body.appendChild(script);
// }

// function addSrcAttrToLazyImages() {
//   const lazyImages = document.querySelectorAll('img[loading="lazy"]');

//   lazyImages.forEach(img => {
//     img.src = img.dataset.src;
//   });
// }
