function checkForDuplicates(baseArray, newArray) {
  for (let newElement of newArray) {
    for (let baseElement of baseArray) {
      if (
        newElement[0] === baseElement[0] &&
        newElement[1] === baseElement[1]
      ) {
        return true;
      }
    }
  }

  return false;
}

export { checkForDuplicates };
