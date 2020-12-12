import {
  initTaskImages, initDescription, initHTMLCode, burgerOnClick,
  initTaskNumHeader, initPseudoCode, clearCSS,
} from './init';
import levels from '../model/levels';

const levelOnClick = (e) => {
  const levelNum = e.target.getAttribute('data-level');
  localStorage.setItem('lastLevel', levelNum);

  initTaskNumHeader(levelNum, levels.length);
  initTaskImages(levels[levelNum - 1]);
  initDescription(levels[levelNum - 1]);
  initHTMLCode(levels[levelNum - 1]);
  initPseudoCode(levels[levelNum - 1]);
  clearCSS();

  const htmlEditor = document.querySelector('.html');
  hljs.highlightBlock(htmlEditor);

  burgerOnClick();
};

export default levelOnClick;
