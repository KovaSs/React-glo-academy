function randomId() {
  const idLength = 5;
  const timestamp = +new Date();
  let newId = 'id';

  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generate(newId) {
    const toStr = timestamp.toString();
    const parts = toStr.split('').reverse();
    
    for(let i = 0; i < idLength; ++i) {
      let index = randomNum(0, parts.length - 1);
      newId += parts[index];
    }

    return newId;
  }

  return generate(newId)
}

export default randomId;