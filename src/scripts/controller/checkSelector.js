const checkSelector = () => {
  const pseudoCode = document.querySelector('fairytale').childNodes;
  const images = document.querySelector('.imgContent').childNodes;

  for (let i = 0; i < pseudoCode.length; i += 1) {
    const isElemMarkInHTML = getComputedStyle(pseudoCode[i]).content === '"marked"';
    const isImageShouldMark = images[i].classList.contains('target');
    if (isElemMarkInHTML !== isImageShouldMark) {
      return false;
    }
  }

  return true;
};

export default checkSelector;
