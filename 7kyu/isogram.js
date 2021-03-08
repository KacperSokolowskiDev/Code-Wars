function isIsogram(str) {
  const array = str.split("");
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[0].toUpperCase() === array[0]) {
      return true;
    }
    const letter1 = array[i];
    for (let j = 0; j < array.length; j++) {
      const letter2 = array[j];
      if (i !== j) {
        if (letter1 === letter2) {
          return false;
        }
      } else if (array[i].toUpperCase() === array[i]) {
        return false;
      }
    }
  }
  return true;
}

isIsogram("aba");
