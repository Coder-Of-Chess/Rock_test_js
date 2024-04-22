
// Tic Tac Toe code

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

// Minesweeper code

const minefield = document.getElementById('minefield');
const mineStatus = document.getElementById('mineStatus');
const rows = 8;
const cols = 8;
const mines = 10;
let mineGrid = [];

function initializeMinesweeper() {
  generateGrid();
  placeMines();
  updateMineStatus();
}

function generateGrid() {
  mineGrid = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push({
        hasMine: false,
        revealed: false,
        count: 0
      });
    }
    mineGrid.push(row);
  }
}

function placeMines() {
  let minesToPlace = mines;
  while (minesToPlace > 0) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    if (!mineGrid[row][col].hasMine) {
      mineGrid[row][col].hasMine = true;
      incrementNeighborCounts(row, col);
      minesToPlace--;
    }
  }
}

function incrementNeighborCounts(row, col) {
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newRow = row + i;
      const newCol = col + j;
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        mineGrid[newRow][newCol].count++;
      }
    }
  }
}

function revealCell(row, col) {
  const cell = mineGrid[row][col];
  if (!cell.revealed) {
    cell.revealed = true;
    const button = minefield.children[row * cols + col];
    if (cell.hasMine) {
      button.textContent = '💣'; 
      gameOver(false); 
    } else {
      const count = cell.count;
      if (count === 0) {
        button.textContent = '';
        revealNeighbors(row, col);
      } else {
        button.textContent = count;
      }
      if (checkWin()) {
        gameOver(true);
      }
    }
  }
}

function revealNeighbors(row, col) {
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newRow = row + i;
      const newCol = col + j;
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        revealCell(newRow, newCol);
      }
    }
  }
}

function gameOver(win) {
  if (win) {
    mineStatus.textContent = 'Congratulations! You won!';
  } else {
    mineStatus.textContent = 'Game over! You hit a mine!';
  }

  // Disable all remaining cells
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = mineGrid[row][col];
      if (!cell.revealed) {
        const button = minefield.children[row * cols + col];
        button.removeEventListener('click', () => revealCell(row, col));
      }
    }
  }
}

function checkWin() {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = mineGrid[row][col];
      if (!cell.hasMine && !cell.revealed) {
        return false;
      }
    }
  }
  return true;
}

function resetMinesweeper() {
  clearMinesweeperGrid();
  initializeMinesweeper();
}

function clearMinesweeperGrid() {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const button = minefield.children[row * cols + col];
      button.textContent = '';
      button.classList.remove('revealed');
      button.addEventListener('click', () => revealCell(row, col));
    }
  }
}

function createMinesweeperGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const button = document.createElement('button');
      button.classList.add('cell');
      button.addEventListener('click', () => revealCell(i, j));
      minefield.appendChild(button);
    }
  }
}

function updateMineStatus() {
  mineStatus.textContent = `Mines remaining: ${mines}`;
}

initializeMinesweeper();
createMinesweeperGrid();

function gameOver(win) {
  gameActive = false;
  if (win) {
    mineStatus.textContent = 'Congratulations! You won!';
  } else {
    mineStatus.textContent = 'Game over! You hit a mine!';
  }

  // Disable all Minesweeper buttons
  const mineButtons = document.querySelectorAll('#minefield button');
  mineButtons.forEach(button => {
    button.disabled = true;
  });
}

function resetMinesweeper() {
  clearMinesweeperGrid();
  initializeMinesweeper();
  
  // Re-enable all Minesweeper buttons
  const mineButtons = document.querySelectorAll('#minefield button');
  mineButtons.forEach(button => {
    button.disabled = false;
  });
}
