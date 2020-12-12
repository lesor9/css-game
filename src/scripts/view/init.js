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

    img.src = `./assets/images/fairy_tale/${item}.png`;
    img.alt = 'img';
    img.style.width = `${80 / level.elements.length}%`;
    img.classList.add('img-card');
    img.setAttribute('data-tag', item);

    if (level.target.indexOf(item) !== -1) img.classList.add('target');

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

  const oldCode = document.querySelector('fairytale');
  if (oldCode) oldCode.remove();

  const pseudoCode = document.createElement('fairytale');
  pseudoCode.style.display = 'none';
  pseudoCode.classList.add('pseudoCode');

  level.elements.forEach((item) => {
    const elem = document.createElement(item);
    pseudoCode.appendChild(elem);
  });

  htmlEdiror.appendChild(pseudoCode);
};

const clearCSS = () => {
  const cssField = document.querySelector('.css');
  cssField.innerHTML = 'Type selector here..';
};

const currentLevelBorder = (lvlNum) => {
  const currentLevel = document.querySelector(`[data-level="${lvlNum}"]`);
  currentLevel.classList.toggle('burger-list__level-current_task');
};

const initHTMLCode = (level) => {
  const htmlEditor = document.querySelector('.html');
  htmlEditor.innerHTML = '';
  htmlEditor.innerText += '<fairytale>';

  level.elements.forEach((item) => {
    htmlEditor.innerText += `\t<${item}>`;
    htmlEditor.innerText += `</${item}>`;
  });
  htmlEditor.innerText += '</fairytale>';
};

const findImage = (e) => {
  const elem = e.target.closest('.htmlElemOver');
  const htmlCode = document.querySelector('.html').childNodes;
  let indexOfImage = 0;
  for (const codeSnippet of htmlCode) {
    if (codeSnippet.tagName === 'DIV') {
      if (codeSnippet === elem) {
        return indexOfImage;
      }
      indexOfImage += 1;
    }
  }

  return null;
};

const selectImageFromHTMLElement = (e) => {
  const imageIndex = findImage(e);
  const imagesField = document.querySelector('.imgContent').childNodes;
  const selectedImage = imagesField[imageIndex];

  selectedImage.classList.add('imageSelectedViaHTML');
};

const unSelect = () => {
  const imagesField = Array.from(document.querySelector('.imgContent').childNodes);
  imagesField.forEach((image) => {
    image.classList.remove('imageSelectedViaHTML');
  });
};

const elemsHTMLEditorListeners = () => {
  const htmlCode = document.querySelector('.html');
  const htmlTags = document.querySelectorAll('.hljs-tag');

  for (let i = 1; i < htmlTags.length - 1; i += 2) {
    const div = document.createElement('div');

    div.appendChild(htmlTags[i]);
    div.appendChild(htmlTags[i + 1]);
    div.classList.add('htmlElemOver');

    div.addEventListener('mouseover', selectImageFromHTMLElement);
    div.addEventListener('mouseout', unSelect);

    htmlCode.appendChild(div);
  }

  htmlCode.appendChild(htmlTags[htmlTags.length - 1]);
};

const onloadView = (type = false) => {
  if (!type) {
    addOverlay();
    initBurgerMenu();
  }

  let lastLevel = localStorage.getItem('lastLevel');
  if (!lastLevel) {
    lastLevel = 1;
    localStorage.setItem('lastLevel', 1);
  }

  initTaskNumHeader(lastLevel, levels.length);
  initTaskImages(levels[lastLevel - 1]);
  initDescription(levels[lastLevel - 1]);
  initHTMLCode(levels[lastLevel - 1]);
  initPseudoCode(levels[lastLevel - 1]);
  currentLevelBorder(lastLevel);
  clearCSS();

  if (type === 'right-selector') {
    const selectorInputFiled = document.querySelector('.css');
    selectorInputFiled.innerText = '';
    selectorInputFiled.focus();
  }

  const htmlEditor = document.querySelector('.html');
  hljs.highlightBlock(htmlEditor);
  elemsHTMLEditorListeners();
};

export {
  onloadView, burgerOnClick, currentLevelBorder,
};
