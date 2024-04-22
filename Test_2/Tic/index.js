// index.js

const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameActive = true;
let winner = null;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      cells[a].innerText === currentPlayer &&
      cells[b].innerText === currentPlayer &&
      cells[c].innerText === currentPlayer
    ) {
      winner = currentPlayer;
      gameActive = false;
      cells[a].style.color = 'red';
      cells[b].style.color = 'red';
      cells[c].style.color = 'red';
      displayStatus();
      return;
    }
  }

  if (Array.from(cells).every(cell => cell.innerText !== '')) {
    gameActive = false;
    displayStatus();
    return;
  }
}

function displayStatus() {
  const statusElement = document.getElementById('status');
  if (winner) {
    statusElement.textContent = `Player ${winner} wins!`;
  } else if (!gameActive) {
    statusElement.textContent = 'It\'s a tie!';
  } else {
    statusElement.textContent = '';
  }
}

function handleClick(index) {
  if (gameActive && cells[index].innerText === '') {
    cells[index].innerText = currentPlayer;
    checkWinner();
    if (!winner) {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function resetBoard() {
  cells.forEach(cell => {
    cell.innerText = '';
    cell.style.color = '#fff'; // Reset cell color
  });
  currentPlayer = 'X';
  gameActive = true;
  winner = null;
  displayStatus();
}
