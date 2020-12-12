import { onloadView, burgerOnClick, currentLevelBorder } from './init';

const levelOnClick = (e) => {
  const levelNum = e.target.getAttribute('data-level');
  currentLevelBorder(Number(localStorage.getItem('lastLevel')));
  localStorage.setItem('lastLevel', levelNum);

  onloadView('burger');

  const htmlEditor = document.querySelector('.html');
  hljs.highlightBlock(htmlEditor);

  burgerOnClick();
};

export default levelOnClick;
