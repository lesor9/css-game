import '../css/reset.css';
import '../css/style.css';

const burgerBtn = document.querySelector('.burger-btn');
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-open');
});