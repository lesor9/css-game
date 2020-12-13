import { onloadView } from '../view/init';
import { makeBorders, onNextLevelAnimation } from '../view/inputSelector';
import levelOnClick from '../view/updateLevel';
import checkSelector from './checkSelector';
import complete from '../view/complete';
import levels from '../model/levels';


const currentLevelBorder = (lvlNum) => {
  const currentLevel = document.querySelector(`[data-level="${lvlNum}"]`);
  currentLevel.classList.toggle('burger-list__level-current_task');
};

const isGameFinished = () => {
  let nonSolved = false;

  const levelBtns = document.querySelectorAll('.burger-list__level');
  levelBtns.forEach((lvl) => {
    const solved = lvl.classList.contains('burger-list__level_solved');
    const solvedWithHelp = lvl.classList.contains('burger-list__level_solved-with-help');

    if (solved === false && solvedWithHelp === false) nonSolved = true;
  });

  if (nonSolved) return false;
  return true;
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

  const isRightSelector = checkSelector();
  if (isRightSelector) {
    const levelNum = Number(localStorage.getItem('lastLevel'));
    const levelBtn = document.querySelector(`[data-level="${levelNum}"]`);
    levelBtn.classList.add('burger-list__level_solved');

    if (isGameFinished()) {
      onNextLevelAnimation();
      setTimeout(() => {
        complete();
      }, 1000);
      return;
    }

    const isLastLevel = levels.length === levelNum;
    if (isLastLevel) {
      onNextLevelAnimation();
    }
    else if (!isLastLevel) {
      currentLevelBorder(Number(localStorage.getItem('lastLevel')));
      localStorage.setItem('lastLevel', levelNum + 1);
      onNextLevelAnimation();
      setTimeout(() => {
        onloadView('right-selector');
      }, 1000);
      const htmlEditor = document.querySelector('.html');
      hljs.highlightBlock(htmlEditor);
    }
  } else {
    makeBorders();
  }
};

const highlightCSS = (e) => {
  const css = document.querySelector('.css');
  const placeHolder = css.innerText;
  hljs.highlightBlock(css);
  inputSelector(placeHolder);
};

const cssEditorPlaceHolderClick = (e) => {
  const placeHolder = e.target;

  if (placeHolder.innerText === 'Type selector here..') {
    placeHolder.innerText = '';
  }
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
};

const levelsListeners = () => {
  const levelsBtns = document.querySelectorAll('.burger-list__level');
  levelsBtns.forEach((lvl) => {
    lvl.addEventListener('click', levelOnClick);
  });
};

const enterOnPage = (e) => {
  const css = document.querySelector('.css');

  if (e.key === 'Enter') {
    const cssEditBlock = document.querySelector('.css_game-textarea');
    cssEditBlock.removeEventListener('blur', highlightCSS);
    css.blur();
    cssEditBlock.addEventListener('blur', highlightCSS);
    highlightCSS();
  }
};

document.body.addEventListener('keypress', enterOnPage);

export default function onload() {
  onloadView();
  configureEditors();
  levelsListeners();
}
