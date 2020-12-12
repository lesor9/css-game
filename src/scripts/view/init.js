import levels from '../model/levels';

const initBurgerMenu = () => {
  const levelList = document.querySelector('.burger-list');

  levels.forEach((item) => {
    const levelBtn = document.createElement('button');
    levelBtn.classList.add('burger-list__level');
    levelBtn.setAttribute('data-level', item.level);
    levelBtn.innerHTML = `Level ${item.level}`;
    levelList.appendChild(levelBtn);
  });
};

const initTaskImages = (level) => {
  const imgField = document.querySelector('.css_game-cards');
  imgField.innerHTML = '';
  const imgContent = document.createElement('div');
  imgContent.classList.add('imgContent');

  level.elements.forEach((item) => {
    const img = document.createElement('img');

    img.src = `./assets/images/fairy_tale/png/${item}.png`;
    img.alt = 'img';
    img.height = '120';
    img.classList.add('img-card');
    img.setAttribute('data-tag', item);

    if (level.target.indexOf(item) != -1) img.classList.add('target');

    imgContent.appendChild(img);
  });
  imgField.appendChild(imgContent);

  const line = document.createElement('hr');
  line.classList.add('imgUnderline');
  imgField.appendChild(line);
};

const initDescription = (level) => {
  const descField = document.querySelector('.css_game-task_description');
  descField.innerHTML = '';
  const taskText = document.createElement('p');
  taskText.innerHTML = level.description;
  descField.appendChild(taskText);
};

const initHTMLCode = (level) => {
  const htmlEditor = document.querySelector('.html');
  htmlEditor.innerHTML = '';
  htmlEditor.innerHTML += '&lt;fairytale&gt;';

  level.elements.forEach((item) => {
    htmlEditor.innerHTML += `<br>\t&lt;${item}&gt<br>`;
    htmlEditor.innerHTML += `\t&lt;/${item}&gt<br>`;
  });

  htmlEditor.innerHTML += '&lt;/fairytale&gt';
};

const burgerOnClick = () => {
  document.body.classList.toggle('burger-open');
};

const addOverlay = () => {
  const overlay = document.querySelector('.overlay');
  overlay.addEventListener('click', burgerOnClick);
};

const initTaskNumHeader = (current, all) => {
  const taskNum = document.querySelector('.header-task_number');
  taskNum.innerHTML = `Task ${current}/${all}`;
};

const initPseudoCode = (level) => {
  const htmlEdiror = document.querySelector('.css_game-html_editor');
  const pseudoCode = document.createElement('fairytale');
  pseudoCode.style.display = 'none';

  level.elements.forEach((item) => {
    const elem = document.createElement(item);
    pseudoCode.appendChild(elem);
  });

  htmlEdiror.appendChild(pseudoCode);
};

const onloadView = () => {
  addOverlay();
  initBurgerMenu();

  const lastLevel = localStorage.getItem('lastLevel') || 1;

  initTaskNumHeader(lastLevel, levels.length);
  initTaskImages(levels[lastLevel - 1]);
  initDescription(levels[lastLevel - 1]);
  initHTMLCode(levels[lastLevel - 1]);
  initPseudoCode(levels[lastLevel - 1]);
};

export {
  initTaskImages, initDescription, initHTMLCode, onloadView, burgerOnClick, initTaskNumHeader,
};
