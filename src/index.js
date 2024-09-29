import { Ship, Gameboard, Player } from './classes.js';
import {
  checkForDuplicates,
  extractCoordinates,
  populateGrid,
  resetGrid,
  randomCoordinate,
} from './functions.js';
import './styles.css';

let startGameModal = document.querySelector('.game-setup');
let endGameModal = document.querySelector('.game-over');

document.querySelector('.new-game').addEventListener('click', function () {
  startGameModal.showModal();
  let realPlayer = new Player('real');
  let computerPlayer = new Player('cpu');
  let dialogGridArray = document.querySelectorAll('.dialog-grid');
  populateGrid(dialogGridArray, realPlayer.gameboard.shipCoordinates);

  document
    .querySelector('.change-layout')
    .addEventListener('click', function () {
      resetGrid(dialogGridArray);
      realPlayer.gameboard = new Gameboard();
      populateGrid(dialogGridArray, realPlayer.gameboard.shipCoordinates);
    });

  document.querySelector('.start-game').addEventListener('click', function () {
    startGameModal.close();
    resetGrid(dialogGridArray);
    let playerGridArray = document.querySelectorAll('.player-grid');
    let computerGridArray = document.querySelectorAll('.computer-grid');
    let playerTakenCoordinates = [];

    populateGrid(playerGridArray, realPlayer.gameboard.shipCoordinates);

    for (let grid of computerGridArray) {
      grid.addEventListener('click', function () {
        computerPlayer.gameboard.receiveAttack(
          extractCoordinates(grid.className),
        );
        if (
          checkForDuplicates(
            computerPlayer.gameboard.shipCoordinates,
            extractCoordinates(grid.className),
          )
        ) {
          grid.className += ' damaged-grid';
        } else {
          grid.className += ' missed-grid';
        }

        if (computerPlayer.gameboard.allShipsSunk()) {
          // GAME OVER CODE
          endGameModal.showModal();
          document.querySelector('.result').textContent = 'You Win!';
          document
            .querySelector('.restart-game')
            .addEventListener('click', function () {
              location.reload();
            });
        }

        let attackCoordinates = randomCoordinate(playerTakenCoordinates);
        playerTakenCoordinates.push(attackCoordinates[0]);
        realPlayer.gameboard.receiveAttack(attackCoordinates);
        if (
          checkForDuplicates(
            realPlayer.gameboard.shipCoordinates,
            attackCoordinates,
          )
        ) {
          for (let grid of playerGridArray) {
            if (
              checkForDuplicates(
                extractCoordinates(grid.className),
                attackCoordinates,
              )
            ) {
              grid.classList.add('damaged-grid');
            }
          }
        } else {
          for (let grid of playerGridArray) {
            if (
              checkForDuplicates(
                extractCoordinates(grid.className),
                attackCoordinates,
              )
            ) {
              grid.classList.add('missed-grid');
            }
          }
        }

        if (realPlayer.gameboard.allShipsSunk()) {
          // GAME OVER CODE
          endGameModal.showModal();
          document.querySelector('.result').textContent = 'Computer Wins!';
          document
            .querySelector('.restart-game')
            .addEventListener('click', function () {
              location.reload();
            });
        }
      });
    }
  });
});
