import { checkForDuplicates } from './functions';

describe('checkForDuplicates', () => {
  test('should return true if there is a duplicate', () => {
    const baseArray = [
      [1, 2],
      [3, 4],
    ];
    const newArray = [[3, 4]];
    expect(checkForDuplicates(baseArray, newArray)).toBe(true);
  });

  test('should return false if there is no duplicate', () => {
    const baseArray = [
      [1, 2],
      [3, 4],
    ];
    const newArray = [[5, 6]];
    expect(checkForDuplicates(baseArray, newArray)).toBe(false);
  });
});

import { Ship } from './classes';

describe('Ship', () => {
  test('should increment timesHit when hit() is called', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.timesHit).toBe(1);
  });

  test('should mark the ship as sunk if timesHit equals length', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    ship.isSunk();
    expect(ship.sunk).toBe(true);
  });

  test('should not mark the ship as sunk if timesHit is less than length', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.isSunk();
    expect(ship.sunk).toBe(false);
  });
});

import { Gameboard } from './classes';

describe('Gameboard', () => {
  test('should record missed attack', () => {
    const gameboard = new Gameboard();
    const coordinates = [0, 0];
    gameboard.receiveAttack(coordinates);
    expect(gameboard.missedCoordinates).toContainEqual(coordinates);
  });

  test('should hit a ship and not count it as missed if coordinates match a ship', () => {
    const gameboard = new Gameboard();
    const shipCoordinates = gameboard.twoShip.coordinates[0];
    gameboard.receiveAttack(shipCoordinates);
    expect(gameboard.twoShip.ship.timesHit).toBe(1);
    expect(gameboard.missedCoordinates).not.toContainEqual(shipCoordinates);
  });

  test('should return true if all ships are sunk', () => {
    const gameboard = new Gameboard();
    gameboard.twoShip.ship.timesHit = 2;
    gameboard.firstThreeShip.ship.timesHit = 3;
    gameboard.secondThreeShip.ship.timesHit = 3;
    gameboard.fourShip.ship.timesHit = 4;
    gameboard.fiveShip.ship.timesHit = 5;
    gameboard.twoShip.ship.isSunk();
    gameboard.firstThreeShip.ship.isSunk();
    gameboard.secondThreeShip.ship.isSunk();
    gameboard.fourShip.ship.isSunk();
    gameboard.fiveShip.ship.isSunk();
    expect(gameboard.allShipsSunk()).toBe(true);
  });
});

import { extractCoordinates } from './functions';

describe('extractCoordinates', () => {
  test('should extract coordinates correctly from a valid string', () => {
    const inputString = '[1, 2] dialog-grid';
    const expectedOutput = [[1, 2]];
    expect(extractCoordinates(inputString)).toEqual(expectedOutput);
  });
});

// Ship.test.js
