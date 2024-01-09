import { useState, useEffect } from "react";
import "./board.css";

function Board() {
  const EMPTY = null;
  const [solution, setSolution] = useState(generateSudoku());
  const [sudokuArr, setSudokuArr] = useState([]);
  const [firstRender, setFirstRender] = useState([]);

  function generateSudoku() {
    let sudokuGrid = Array.from(Array(9), () => Array(9).fill(0));

    for (let i = 0; i < 9; i++) {
      let randomNumber = Math.floor(Math.random() * 9) + 1;
      while (!isValidPlacement(sudokuGrid, i, i, randomNumber)) {
        randomNumber = Math.floor(Math.random() * 9) + 1;
      }
      sudokuGrid[i][i] = randomNumber;
    }

    if (fillRemaining(sudokuGrid)) {
      return sudokuGrid;
    } else {
      return generateSudoku();
    }
  }
  function fillRemaining(grid) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValidPlacement(grid, row, col, num)) {
              grid[row][col] = num;
              if (fillRemaining(grid)) {
                return true;
              }
              grid[row][col] = 0; // Backtrack se não for possível continuar
            }
          }
          return false; // Não foi possível encontrar um número válido
        }
      }
    }
    return true; // A grade está completamente preenchida
  }
  function isValidPlacement(grid, row, col, num) {
    // Verifica se o número não está presente na mesma linha e coluna
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === num || grid[i][col] === num) {
        return false;
      }
    }

    // Verifica se o número não está presente na mesma sub-grade 3x3
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[startRow + i][startCol + j] === num) {
          return false;
        }
      }
    }

    return true; // Número válido
  }

  const initialSudoku = (solution) => {
    const clonedSolution = JSON.parse(JSON.stringify(solution));
    const removedElements = 35;

    for (let i = 0; i < removedElements; i++) {
      const randomGridIndex = Math.floor(Math.random() * 9);
      const randomItemIndex = Math.floor(Math.random() * 9);
      clonedSolution[randomGridIndex][randomItemIndex] = EMPTY;
    }

    return clonedSolution;
  };

  useEffect(() => {
    setSudokuArr(initialSudoku(solution));
    setFirstRender(JSON.parse(JSON.stringify(sudokuArr)));
    console.log(firstRender);
  }, []);

  function checkSolution(gridIndex, itemIndex, event) {
    let value = parseInt(event.target.value);
    const item = solution[gridIndex][itemIndex];
    if (item === value) {
      event.target.style.backgroundColor = "#4287f5";
      return;
    } else if (isNaN(value)) {
      event.target.style.backgroundColor = "#fff";
    } else if (value !== item && value !== "") {
      event.target.style.backgroundColor = "#f59089";
    }
  }

  function handleChange(gridIndex, itemIndex, event) {
    if (event.target.value > 9) {
      return;
    }
    setSudokuArr((prevSudokuArr) => {
      const updatedSudokuArr = prevSudokuArr.map((grid, i) => {
        if (i === gridIndex) {
          return grid.map((item, j) => {
            if (j === itemIndex) {
              return event.target.value;
            }
            return item;
          });
        }
        return grid;
      });
      return updatedSudokuArr;
    });
    checkSolution(gridIndex, itemIndex, event);
  }
  function isInitialEmpty(gridIndex, itemIndex) {
    return (
      firstRender.length > 0 &&
      firstRender.length === 9 &&
      firstRender[gridIndex] &&
      firstRender[gridIndex].length === 9 &&
      firstRender[gridIndex][itemIndex] === EMPTY
    );
  }
  return (
    <table className="square-table">
      <tbody>
        {sudokuArr.map((grid, gridIndex) => {
          return (
            <tr key={gridIndex}>
              {grid.map((item, itemIndex) => {
                const isInitialEmptyCell = isInitialEmpty(gridIndex, itemIndex);
                return (
                  <td key={`${gridIndex}${itemIndex}`}>
                    {firstRender[gridIndex][itemIndex] !== null ? (
                      <div className="cell">{item}</div>
                    ) : (
                      <input
                        value={""}
                        className="cell"
                        onChange={(event) => {
                          handleChange(gridIndex, itemIndex, event);
                        }}
                        readOnly={isInitialEmptyCell}
                      />
                    )}
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
