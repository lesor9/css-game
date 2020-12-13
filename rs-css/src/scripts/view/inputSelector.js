const makeBorders = () => {
  const pseudoCode = document.querySelector('fairytale').childNodes;
  const images = document.querySelector('.imgContent').childNodes;
  let isSelectorFound = false;

  for (let i = 0; i < images.length; i += 1) {
    if (getComputedStyle(pseudoCode[i]).content === '"marked"') {
      images[i].classList.add('border');
      isSelectorFound = true;
      setTimeout(() => {
        images[i].classList.remove('border');
      }, 1000);
    }
  }

  if (!isSelectorFound) {
    const imageField = document.querySelector('.imgContent');
    imageField.classList.add('wrongSelector');
    setTimeout(() => {
      imageField.classList.remove('wrongSelector');
    }, 1000);
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
