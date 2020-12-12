const makeBorders = () => {
  const pseudoCode = document.querySelector('fairytale').childNodes;
  const images = document.querySelector('.imgContent').childNodes;

  pseudoCode.forEach((elem) => {
    if (getComputedStyle(elem).content === '"marked"') {
      images.forEach((img) => {
        if (img.dataset.tag === elem.tagName.toLowerCase()) {
          img.classList.add('border');
          setTimeout(() => {
            img.classList.remove('border');
          }, 1000);
        }
      });
    }
  });
};

const onNextLevelAnimation = () => {
    const pseudoCode = document.querySelector('fairytale').childNodes;
    const images = document.querySelector('.imgContent').childNodes;
  
    images.forEach((img) => {
        img.classList.add('card-completed');
        setTimeout(() => {
            img.classList.remove('card-completed');
        }, 1000);
    });
}


export { makeBorders, onNextLevelAnimation };
