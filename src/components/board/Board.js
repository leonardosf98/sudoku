import { useState, useEffect } from "react";
import "./board.css";
function Board() {
  function handleClick(event) {}
  const EMPTY = null;
  const generateSolution = () => {
    let n = 3;
    const game = Array(9);
    for (let i = 0; i < 9; i++) {
      game[i] = Array(9).fill(null);
    }
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        game[i][j] = Math.floor(((i * n + i / n + j) % 9) + 1);
      }
      console.log(game[i]);
    }
    return game;
  };
  const initialList = () => {
    const randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let inicialSudoku = generateSolution();
    for (let i = 50; i > 0; i--) {
      let columnToRemove = randomInt(0, 8);
      let lineToRemove = randomInt(0, 8);
      inicialSudoku[lineToRemove][columnToRemove] = EMPTY;
    }
    return inicialSudoku;
  };
  const initial = initialList();

  const solution = generateSolution();

  console.log(solution);
  const [sudokuArr, setSudokuArr] = useState(initial);

  const handleInputChange = (gridIndex, itemIndex, event) => {
    const { value } = event.target;
    if (
      (isNaN(parseInt(value)) && value !== "") ||
      value.length > 1 ||
      value === "0"
    )
      return;
    setSudokuArr((oldState) => {
      const copyArray = [...oldState];
      copyArray[gridIndex][itemIndex] = value;
      checkSolution(gridIndex, itemIndex, event);
      return copyArray;
    });
  };
  function checkSolution(gridIndex, itemIndex, event) {
    let value = parseInt(event.target.value);
    const item = solution[gridIndex][itemIndex];
    if (item === value) {
      blockInput(event);
      return;
    } else if (event.target.value === "") {
      event.target.style.backgroundColor = "#fff";
    } else if (event.target.value !== item && value !== "") {
      event.target.style.backgroundColor = "#f59089";
    }
  }
  function blockInput(event) {
    event.target.disabled = true;
    event.target.style.backgroundColor = "#5584f2";
  }
  return (
    <table className="square-table">
      <tbody>
        {sudokuArr.map((grid, gridIndex) => {
          return (
            <tr key={gridIndex}>
              {grid.map((item, itemIndex) => {
                return (
                  <td key={`${gridIndex}${itemIndex}`}>
                    <input
                      className="cell"
                      value={item ?? ""}
                      onChange={(event) => {
                        handleInputChange(gridIndex, itemIndex, event);
                      }}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Board;
