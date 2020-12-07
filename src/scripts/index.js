import '../css/reset.css';
import '../css/style.css';
import '../css/dracula.css';

const burgerOpen = () => {
    document.body.classList.toggle('burger-open');
};

hljs.configure({languages: ['css']});
const cssChanged = () => {
    hljs.highlightBlock(cssEditBlock);
}

const burgerBtn = document.querySelector('.burger-btn');
burgerBtn.addEventListener('click', burgerOpen);

const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', burgerOpen);

const cssEditBlock = document.querySelector('.css_game-textarea');
cssEditBlock.addEventListener('blur', cssChanged);
cssEditBlock.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        cssChanged();
        cssEditBlock.blur();
    }
});



