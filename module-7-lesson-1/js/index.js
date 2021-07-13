// const img = document.querySelector('.picture');
// console.log(img);
// img.style.width = '1200px';
// img.classList.replace('picture', 'foo');
// console.dir(img);

/** DOM selectors */
// const overlayRef = document.querySelector('.main');
// const colorPickerRef = document.querySelector('.color');
// const itemListRef = document.querySelector('.list');
// const firstItemRef = itemListRef.firstElementChild;
// console.log(firstItemRef.nextElementSibling, '---firstItemRef');

// const handleColorPickerChange = (event) => {
//   // const {
//   //   target: { value },
//   // } = event;
//   const { target } = event;
//   overlayRef.style.backgroundColor = target.value;
// };

// colorPickerRef.setAttribute('name', 'colorPicker');
// overlayRef.setAttribute('name', 'overlay');
// console.log(colorPickerRef.name);
// colorPickerRef.addEventListener('change', handleColorPickerChange);

/** Attributes */
// const plainTextRef = document.querySelector('#plain-text');
// const userInput = 'John<img src="/asdsasad" onerror="alert(1111)">';
// const imageTemplate = `
//   <img
//     class="picture"
//     src="https://www-archive.mozilla.org/docs/dom/technote/whitespace/whitespace_tree.png"
//     alt=""
//     width="800"
//   />
// `;
// // const text = plainTextRef.getAttribute('data-text');
// const text = plainTextRef.dataset.id;
// // plainTextRef.textContent = text;
// plainTextRef.innerHTML = imageTemplate;
// console.log(text);

/** Создание дом узлов */
const cardListRef = document.querySelector('.card-list');

const cardTemplate = `
  <div class="card">
    <img src="https://www.licensingmagazine.com/wp-content/uploads/2019/10/mr-bean.jpg" alt="" class="card__image" />
    <h2 class="card__title">Card</h2>
  </div>
`;

const cardData = [
  { title: 'First card' },
  { title: 'Second card' },
  { title: 'Third card' },
];

const createCardTemplate = (props) => {
  const { title } = props;

  return `
    <div class="card">
      <img src="https://www.licensingmagazine.com/wp-content/uploads/2019/10/mr-bean.jpg" alt="" class="card__image" />
      <h2 class="card__title">${title}</h2>
    </div>
  `;
};
/**
attributes = {
  src: 'asdasd',
  alt: 'dsadas',
  name: 'adsas'
} 
*/
const createElement = (tagName, attributes = {}) => {
  const element = document.createElement(tagName);
  const attributesEntries = Object.entries(attributes);
  // attributesEntries: [['src', 'asdasd'], ['alt', 'dsadas'], ['name', 'adsas']]
  attributesEntries.forEach((attribute) => {
    const [attributeName, attributeValue] = attribute;
    element.setAttribute(attributeName, attributeValue);
  });

  return element;
};

const createCardElementsTemplate = ({ title }) => {
  const cardWrapper = document.createElement('div');
  const image = createElement('img', {
    src: 'https://www.licensingmagazine.com/wp-content/uploads/2019/10/mr-bean.jpg',
  });
  const heading = document.createElement('h2');

  heading.textContent = title;
  image.classList.add('card__image');
  cardWrapper.classList.add('card');
  heading.classList.add('card__title');

  cardWrapper.append(image, heading);

  return cardWrapper;
};

/** Добавление при помощи innerHTML
const item = createCardElementsTemplate({ title: 'test title' });

const cardList = cardData.map((card) => createCardTemplate(card)).join('');
console.log(cardList);

cardListRef.innerHTML = cardList;
*/

/** Добавление при помощи CreateElement  */
const cardList = cardData.map((card) => createCardElementsTemplate(card));
console.log(cardList);
cardListRef.append(...cardList);
