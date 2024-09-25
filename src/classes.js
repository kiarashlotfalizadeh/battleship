import { checkForDuplicates } from './functions';

class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
  }

  hit() {
    this.timesHit++;
  }

  isSunk() {
    if (this.length === this.timesHit) {
      this.sunk = true;
    } else {
      this.sunk = false;
    }
  }
}

class Gameboard {
  constructor() {
    this.shipCoordinates = [];
    this.missedCoordinates = [];
    this.twoShip = {
      ship: new Ship(2),
    };
    this.twoShip.coordinates = this.getCoordinates(
      this.twoShip.ship,
      this.shipCoordinates,
    );

    this.firstThreeShip = {
      ship: new Ship(3),
    };
    this.firstThreeShip.coordinates = this.getCoordinates(
      this.firstThreeShip.ship,
      this.shipCoordinates,
    );

    this.secondThreeShip = {
      ship: new Ship(3),
    };
    this.secondThreeShip.coordinates = this.getCoordinates(
      this.secondThreeShip.ship,
      this.shipCoordinates,
    );

    this.fourShip = {
      ship: new Ship(4),
    };
    this.fourShip.coordinates = this.getCoordinates(
      this.fourShip.ship,
      this.shipCoordinates,
    );

    this.fiveShip = {
      ship: new Ship(5),
    };
    this.fiveShip.coordinates = this.getCoordinates(
      this.fiveShip.ship,
      this.shipCoordinates,
    );
  }

  getCoordinates(ship, takenCoordinatesArray) {
    let coordinatesArray;

    do {
      coordinatesArray = [];
      let xCoordinate = Math.round(Math.random() * 9);
      let yCoordinate = Math.round(Math.random() * 9);
      coordinatesArray.push([xCoordinate, yCoordinate]);

      let variableSelector = Math.round(Math.random());

      if (variableSelector === 0) {
        let directionSelector = Math.round(Math.random());

        if (directionSelector === 0) {
          let currentPosition = [...coordinatesArray[0]];
          for (let i = 1; i < ship.length; i++) {
            coordinatesArray.push([currentPosition[0] - 1, currentPosition[1]]);
            currentPosition = [...coordinatesArray[i]];
          }
        } else {
          let currentPosition = [...coordinatesArray[0]];
          for (let i = 1; i < ship.length; i++) {
            coordinatesArray.push([currentPosition[0] + 1, currentPosition[1]]);
            currentPosition = [...coordinatesArray[i]];
          }
        }
      } else {
        let directionSelector = Math.round(Math.random());

        if (directionSelector === 0) {
          let currentPosition = [...coordinatesArray[0]];
          for (let i = 1; i < ship.length; i++) {
            coordinatesArray.push([currentPosition[0], currentPosition[1] - 1]);
            currentPosition = [...coordinatesArray[i]];
          }
        } else {
          let currentPosition = [...coordinatesArray[0]];
          for (let i = 1; i < ship.length; i++) {
            coordinatesArray.push([currentPosition[0], currentPosition[1] + 1]);
            currentPosition = [...coordinatesArray[i]];
          }
        }
      }
    } while (checkForDuplicates(takenCoordinatesArray, coordinatesArray));

    for (let position of coordinatesArray) {
      this.shipCoordinates.push(position);
    }

    return coordinatesArray;
  }

  receiveAttack(coordinates) {
    if (checkForDuplicates(this.twoShip.coordinates, [coordinates])) {
      this.twoShip.ship.hit();
      this.twoShip.ship.isSunk();
      return;
    } else if (
      checkForDuplicates(this.firstThreeShip.coordinates, [coordinates])
    ) {
      this.firstThreeShip.ship.hit();
      this.firstThreeShip.ship.isSunk();
      return;
    } else if (
      checkForDuplicates(this.secondThreeShip.coordinates, [coordinates])
    ) {
      this.secondThreeShip.ship.hit();
      this.secondThreeShip.ship.isSunk();
      return;
    } else if (checkForDuplicates(this.fourShip.coordinates, [coordinates])) {
      this.fourShip.ship.hit();
      this.fourShip.ship.isSunk();
      return;
    } else if (checkForDuplicates(this.fiveShip.coordinates, [coordinates])) {
      this.fiveShip.ship.hit();
      this.fiveShip.ship.isSunk();
      return;
    } else {
      this.missedCoordinates.push([...coordinates]);
      return;
    }
  }

  allShipsSunk() {
    if (
      this.twoShip.ship.sunk &&
      this.firstThreeShip.ship.sunk &&
      this.secondThreeShip.ship.sunk &&
      this.fourShip.ship.sunk &&
      this.fiveShip.ship.sunk
    ) {
      return true;
    }

    return false;
  }
}

class Player {
  constructor(type) {
    this.type = type;
    this.gameboard = new Gameboard();
  }
}

export { Ship, Gameboard, Player };
