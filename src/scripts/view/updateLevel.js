import {
  initTaskImages, initDescription, initHTMLCode, burgerOnClick, initTaskNumHeader,
} from './init.js';
import levels from '../model/levels';

const levelOnClick = (e) => {
  const levelNum = e.target.getAttribute('data-level');

  initTaskNumHeader(levelNum, levels.length);
  initTaskImages(levels[levelNum - 1]);
  initDescription(levels[levelNum - 1]);
  initHTMLCode(levels[levelNum - 1]);

  const htmlEditor = document.querySelector('.html');
  hljs.highlightBlock(htmlEditor);

  burgerOnClick();
};

export { levelOnClick };
