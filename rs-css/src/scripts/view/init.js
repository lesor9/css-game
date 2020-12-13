import levels from '../model/levels';

const resetProgress = () => {
  const levelsBtns = [...document.querySelectorAll('.burger-list__level')];
  levelsBtns.forEach((level) => {
    level.classList.remove('burger-list__level_solved');
    level.classList.remove('burger-list__level_solved-with-help');
    level.classList.remove('burger-list__level-current_task');
  });

  localStorage.clear();
  onloadView('reset');
  document.body.classList.toggle('burger-open');
};

const initBurgerMenu = () => {
  const levelList = document.querySelector('.burger-list');

  levels.forEach((item) => {
    const levelBtn = document.createElement('button');
    levelBtn.classList.add('burger-list__level');
    levelBtn.setAttribute('data-level', item.level);
    levelBtn.innerHTML = `Level ${item.level} - ${item.name}`;
    levelList.appendChild(levelBtn);
  });

  const cleanBtn = document.createElement('button');
  cleanBtn.innerText = 'Reset progress';
  cleanBtn.classList.add('resetButton');

  cleanBtn.addEventListener('click', resetProgress);

  levelList.appendChild(cleanBtn);
};

const initTaskImages = (level) => {
  const imgField = document.querySelector('.css_game-cards');
  imgField.innerHTML = '';
  const imgContent = document.createElement('div');
  imgContent.classList.add('imgContent');

  level.elements.forEach((item, id) => {
    const img = document.createElement('img');

    if (item.img) {
      img.src = `./assets/images/fairy_tale/${item.img}.png`;
    } else {
      img.src = `./assets/images/fairy_tale/${item.name}.png`;
    }
    
    img.alt = 'img';
    img.style.width = `${70 / level.elements.length}%`;
    img.classList.add('img-card');
    img.setAttribute('data-tag', item);
    img.setAttribute('data-id', id);

    if (level.level === 5) {
      img.style.width = `${70 / (level.elements.length / 2)}%`;
    };

    if (level.level === 5) {
      img.style.width = `${70 / (level.elements.length / 2)}%`;
    };

    if (level.target.indexOf(id) !== -1) img.classList.add('target');

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
    const elem = document.createElement(item.name);
    if (item.attributes) {
      const attributesArray = Object.entries(item.attributes);
      attributesArray.forEach((atr) => {
        elem.setAttribute(atr[0], atr[1].join(' '));
      }); 
    }
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
    if (item.attributes) {
      let atrib = [];
      const attributesArray = Object.entries(item.attributes);
      attributesArray.forEach((atr) => {
        // console.log(atr[1]);
        atrib.push(`${atr[0]} ="${atr[1].join(' ')}"`);
      });
      
      htmlEditor.innerText += `<${item.name} ${atrib.join(' ')}>`;
    } else {
      htmlEditor.innerText += `<${item.name}>`;
    }
    htmlEditor.innerText += `</${item.name}>`;
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
  const currentDiv = e.target.closest('.htmlElemOver');

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

const divsWithElemsHTMLEditor = () => {
  const htmlCode = document.querySelector('.html');
  const htmlTags = document.querySelectorAll('.hljs-tag');

  for (let i = 1; i < htmlTags.length - 1; i += 2) {
    const div = document.createElement('div');
    const nodeList = [...htmlTags[i].childNodes, ...htmlTags[i + 1].childNodes];
    const span = document.createElement('span');
    span.classList.add('hljs-tag');

    htmlTags[i].remove();
    htmlTags[i + 1].remove();

    nodeList.forEach((node) => {
      span.appendChild(node);
    });

    div.appendChild(span);
    div.classList.add('htmlElemOver');
    htmlCode.appendChild(div);
  }
  htmlCode.appendChild(htmlTags[htmlTags.length - 1]);
};

const elemsHTMLEditorListeners = () => {
  divsWithElemsHTMLEditor();

  const divs = document.querySelectorAll('.htmlElemOver');
  divs.forEach((div) => {
    div.addEventListener('mouseover', selectImageFromHTMLElement);
    div.addEventListener('mouseout', unSelect);
  });
};

const levelCompleteWithHint = () => {
  const levelNum = localStorage.getItem('lastLevel');
  const levelBtn = document.querySelector(`[data-level="${levelNum}"]`);
  if (!levelBtn.classList.contains('burger-list__level_solved')) {
    levelBtn.classList.add('burger-list__level_solved-with-help');
  }
};

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

let isTyping = false;
async function textTyping(e) {
  e.preventDefault();
  if (isTyping) return;
  let lastLevel = localStorage.getItem('lastLevel');
  let hint = levels[lastLevel - 1].hint;
  isTyping = true;
  const hintBtn = document.querySelector('.css_game-hint');
  hint = hint.split('');
  const cssField = document.querySelector('.css');
  cssField.innerText = '';

  await asyncForEach(hint, async (elem) => {
    cssField.innerHTML += elem;
    await new Promise((r) => setTimeout(r, 250));
  });

  levelCompleteWithHint();
  hljs.highlightBlock(document.querySelector('.css'));
  isTyping = false;
}

const initHint = () => {
  const hintBtn = document.querySelector('.css_game-hint');
  hintBtn.addEventListener('click', textTyping);
};

const highlightHTMLElem = (img) => {
  const { id } = img.dataset;
  const tags = document.querySelectorAll('.htmlElemOver');

  tags[id].classList.add('highlightTag');
};

const resetHtmlTagsHighlightTag = () => {
  const tags = [...document.querySelectorAll('.htmlElemOver')];
  tags.forEach((tag) => {
    tag.classList.remove('highlightTag');
  });
};

const imgElemsListeners = () => {
  const imgs = document.querySelector('.imgContent').childNodes;

  imgs.forEach((img) => {
    img.addEventListener('mouseover', () => highlightHTMLElem(img));
    img.addEventListener('mouseout', resetHtmlTagsHighlightTag);
  });
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
  if (!type) initHint();

  if (type === 'right-selector') {
    const selectorInputFiled = document.querySelector('.css');
    selectorInputFiled.innerText = '';
    selectorInputFiled.focus();
  }

  const htmlEditor = document.querySelector('.html');
  hljs.highlightBlock(htmlEditor);
  elemsHTMLEditorListeners();
  imgElemsListeners();
};

export {
  onloadView, burgerOnClick, currentLevelBorder,
};
