

const generateBoard = function(arr1, arr2) {
  let board = [];
  
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let k = 0; k < 8; k++) {
      board[i][k] = 0;
    }
  }
  
  board[arr1[0]][arr1[1]] = 1;
  board[arr2[0]][arr2[1]] = 1;
  
  return board; 
};

const queenThreat = function(board) {
  let qWhite = [];
  let qBlack = [];
  let threat = false;
  
  for (var i = 0; i < board.length; i++) {
    for (var k = 0; k < board[i].length; k++) {
      if (board[i][k] === 1) {
        qWhite[0] = i;
        qWhite[1] = k;
        break;
      }
    }
    break;
  }
  
  for (let j = board.length - 1; j >= 0; j--) {
    for (let l = board[j].length - 1; l >= 0; l--) {
      if (board[j][l] === 1) {
        qBlack[0] = j;
        qBlack[1] = l;
        break;
      }
    }
    if(qBlack.length === 2) {
      break;
    }
  }
  
  if (qWhite[0] === qBlack[0] || qWhite[1] === qBlack[1]) {
    threat = true;
    return threat;
  } 

  for (let row = qWhite[0]; row < board.length; row++) {
    for (let col = qWhite[1]; col < board[row].length; col++) {
      if (qWhite[0][1] === qBlack[0][1]) {
        threat = true;
        return threat;
      }
      qWhite[0] += 1;
      qWhite[1] += 1;
    }
  }

  qWhite = [i, k];

  for (let r = qWhite[0]; r < board.length; r++) {
    for (let c = qWhite[1]; c < board[r].length; c++) {
      if (qWhite[0][1] === qBlack[0][1]) {
        threat = true;
        return threat;
      }
      qWhite[0] += 1;
      qWhite[1] -= 1;
    }
  }
  return threat;
};


let whiteQueen = [5, 0];
let blackQueen = [0, 5];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
// [
  //   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true