import { onloadView } from '../view/init';
import { levelOnClick } from '../view/updateLevel';
import { makeBorders } from '../view/inputSelector';

const cssEditorPlaceHolderClick = (e) => {
  const placeHolder = e.target;

  if (placeHolder.innerHTML === 'Type selector here..') {
    placeHolder.innerHTML = '';
  }
};

const enterSelector = (e) => {
  const placeHolder = e.target;

  if (e.key === 'Enter') {
    highlightCSS(e);

    const cssEditBlock = document.querySelector('.css_game-textarea');
    cssEditBlock.removeEventListener('blur', highlightCSS);
    placeHolder.blur();
    cssEditBlock.addEventListener('blur', highlightCSS);
  }
};

const highlightCSS = (e) => {
  inputSelector(e.target.innerText);
  const placeHolder = e.target;
  hljs.highlightBlock(placeHolder);
};

const inputSelector = (selector) => {
  const oldStyles = document.querySelectorAll('.withSelector');
  oldStyles.forEach((style) => {
    style.remove();
  });

  const style = document.createElement('style');
  style.classList.add('withSelector');
  style.innerHTML = `fairytale ${selector} { content: "marked"; }`;
  document.getElementsByTagName('head')[0].appendChild(style);

  makeBorders();
};

const burgerOpen = () => {
  document.body.classList.toggle('burger-open');
};

const configureEditors = () => {
  hljs.configure({ languages: ['css'] });
  const burgerBtn = document.querySelector('.burger-btn');
  burgerBtn.addEventListener('click', burgerOpen);

  const cssEditBlock = document.querySelector('.css_game-textarea');
  cssEditBlock.addEventListener('click', cssEditorPlaceHolderClick);
  cssEditBlock.addEventListener('blur', highlightCSS);
  cssEditBlock.addEventListener('keypress', enterSelector);
};

const levelsListeners = () => {
  const levelsBtns = document.querySelectorAll('.burger-list__level');
  levelsBtns.forEach((lvl) => {
    lvl.addEventListener('click', levelOnClick);
  });
};

export default function onload() {
  onloadView();
  configureEditors();
  levelsListeners();
}
