// const generateSudoku = () => {
//   const randomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   const game = [];

//   for (let i = 0; i < 9; i++) {
//     game.push([null, null, null, null, null, null, null, null, null]);
//   }

//   for (let i = 0; i < 9; i++) {
//     let row = game[i];
//     const grids = [
//       [
//         game[0][0],
//         game[0][1],
//         game[0][2],
//         game[1][0],
//         game[1][1],
//         game[1][2],
//         game[2][0],
//         game[2][1],
//         game[2][2],
//       ],
//       [
//         game[0][3],
//         game[0][4],
//         game[0][5],
//         game[1][3],
//         game[1][4],
//         game[1][5],
//         game[2][3],
//         game[2][4],
//         game[2][5],
//       ],
//       [
//         game[0][6],
//         game[0][7],
//         game[0][8],
//         game[1][6],
//         game[1][7],
//         game[1][8],
//         game[2][6],
//         game[2][7],
//         game[2][8],
//       ],

//       [
//         game[3][0],
//         game[3][1],
//         game[3][2],
//         game[4][0],
//         game[4][1],
//         game[4][2],
//         game[5][0],
//         game[5][1],
//         game[5][2],
//       ],
//       [
//         game[3][3],
//         game[3][4],
//         game[3][5],
//         game[4][3],
//         game[4][4],
//         game[4][5],
//         game[5][3],
//         game[5][4],
//         game[5][5],
//       ],
//       [
//         game[3][6],
//         game[3][7],
//         game[3][8],
//         game[4][6],
//         game[4][7],
//         game[4][8],
//         game[5][6],
//         game[5][7],
//         game[5][8],
//       ],

//       [
//         game[6][0],
//         game[6][1],
//         game[6][2],
//         game[7][0],
//         game[7][1],
//         game[7][2],
//         game[8][0],
//         game[8][1],
//         game[8][2],
//       ],
//       [
//         game[6][3],
//         game[6][4],
//         game[6][5],
//         game[7][3],
//         game[7][4],
//         game[7][5],
//         game[8][3],
//         game[8][4],
//         game[8][5],
//       ],
//       [
//         game[6][6],
//         game[6][7],
//         game[6][8],
//         game[7][6],
//         game[7][7],
//         game[7][8],
//         game[8][6],
//         game[8][7],
//         game[8][8],
//       ],
//     ];

//     let actualGrid;

//     for (let x = 0; x < 9; x++) {
//       let numberToAdd = randomInt(1, 9);
//       let column = [];
//       if (i > 0) {
//         game.map((item, index) => {
//           column[index] = item[x];
//         });
//       }
//       // console.log(column);
//       if (i < 3) {
//         if (x < 3) {
//           actualGrid = 0;
//         } else if (x < 6) {
//           actualGrid = 1;
//         } else {
//           actualGrid = 2;
//         }
//       } else if (i < 6) {
//         if (x < 3) {
//           actualGrid = 3;
//         } else if (x < 6) {
//           actualGrid = 4;
//         } else {
//           actualGrid = 5;
//         }
//       } else {
//         if (x < 3) {
//           actualGrid = 6;
//         } else if (x < 6) {
//           actualGrid = 7;
//         } else {
//           actualGrid = 8;
//         }
//       }
//       while (
//         row.includes(numberToAdd) ||
//         column.includes(numberToAdd) ||
//         grids[actualGrid].includes(numberToAdd)
//       ) {
//         numberToAdd = randomInt(1, 9);
//       }
//       row[x] = numberToAdd;
//     }
//     console.log(game[i]);
//   }
// };
// generateSudoku();
const generateSudoku = () => {
  let n = 3;
  const game = Array(9).fill([]);
  game.map((item) => {
    item.fill(null);
  });
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      game[i][j] = Math.floor(((i * n + i / n + j) % 9) + 1);
    }
    console.log(game[i]);
  }
  return game;
};
generateSudoku();
