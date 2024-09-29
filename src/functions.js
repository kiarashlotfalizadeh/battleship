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

function extractCoordinates(string) {
  let returnArray = [];
  let insideArray = [];
  let array = string.slice(0, 6).split('');
  insideArray[0] = parseInt(array[1]);
  insideArray[1] = parseInt(array[4]);
  returnArray.push(insideArray);
  return returnArray;
}

function populateGrid(gridArray, shipArray) {
  for (let grid of gridArray) {
    if (checkForDuplicates(extractCoordinates(grid.className), shipArray)) {
      grid.className += ' ship-grid';
    }
  }
}

function outOfBorder(array) {
  for (let coordinate of array) {
    if (
      coordinate[0] > 9 ||
      coordinate[0] < 0 ||
      coordinate[1] > 9 ||
      coordinate[1] < 0
    ) {
      return true;
    }
  }
  return false;
}

function resetGrid(gridArray) {
  for (let grid of gridArray) {
    if (grid.className.includes('ship-grid')) {
      grid.className = grid.className.replace(' ship-grid', '');
    }
  }
}

function randomCoordinate(takenCoordinates) {
  let returnArray = [];
  do {
    let xCoordinate = Math.round(Math.random() * 9);
    let yCoordinate = Math.round(Math.random() * 9);
    returnArray[0] = xCoordinate;
    returnArray[1] = yCoordinate;
  } while (checkForDuplicates([returnArray], takenCoordinates));

  return [returnArray];
}

export {
  checkForDuplicates,
  extractCoordinates,
  populateGrid,
  outOfBorder,
  resetGrid,
  randomCoordinate,
};
