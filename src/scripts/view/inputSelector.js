const makeBorders = () => {
  const pseudoCode = document.querySelector('fairytale').childNodes;
  const images = document.querySelector('.imgContent').childNodes;

  for (let i = 0; i < images.length; i += 1) {
    if (getComputedStyle(pseudoCode[i]).content === '"marked"') {
      images[i].classList.add('border');
      setTimeout(() => {
        images[i].classList.remove('border');
      }, 1000);
    }
  }
};

const onNextLevelAnimation = () => {
  const images = document.querySelector('.imgContent').childNodes;

  images.forEach((img) => {
    img.classList.add('card-completed');
    setTimeout(() => {
      img.classList.remove('card-completed');
    }, 1000);
  });
};

export { makeBorders, onNextLevelAnimation };
