import { useState, useEffect } from "react";
import "./board.css";
function Board() {
  const EMPTY = null;

  const initial = [
    [5, 3, EMPTY, EMPTY, 7, EMPTY, EMPTY, EMPTY, EMPTY],
    [6, EMPTY, EMPTY, 1, 9, 5, EMPTY, EMPTY, EMPTY],
    [EMPTY, 9, 8, EMPTY, EMPTY, EMPTY, EMPTY, 6, EMPTY],
    [8, EMPTY, EMPTY, 7, EMPTY, EMPTY, EMPTY, 2, EMPTY],
    [4, EMPTY, EMPTY, 8, EMPTY, 3, EMPTY, EMPTY, 1],
    [7, EMPTY, EMPTY, EMPTY, 2, EMPTY, EMPTY, EMPTY, 6],
    [EMPTY, 6, EMPTY, EMPTY, EMPTY, EMPTY, 2, 8, EMPTY],
    [EMPTY, EMPTY, EMPTY, 4, 1, 9, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, 8, EMPTY, EMPTY, 7, 9],
  ];

  const zero = [0];
  const solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  const [sudokuArr, setSudokuArr] = useState(initial);
  const [errors, setErrors] = useState(zero);

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
      event.target.style.backgroundColor = "#5584f2";
      return;
    } else if (event.target.value === "") {
      event.target.style.backgroundColor = "#fff";
    } else if (event.target.value !== item && value !== "") {
      event.target.style.backgroundColor = "#f59089";
      setErrors((oldState) => {
        const copyArray = [...oldState];
        copyArray[0] += 1;
        return copyArray;
      });
    }
  }
  function createBorder() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
      if ((index + 1) % 3 === 0) {
        cell.style.borderRight = "4px solid black";
      }
      if (index === 0 || index % 9 === 0) {
        cell.style.borderLeft = "4px solid black";
      }
      if (index > 71) {
        cell.style.borderBottom = "4px solid black";
      }
      if (
        index === 0 ||
        index === 1 ||
        index === 2 ||
        index === 3 ||
        index === 4 ||
        index === 5 ||
        index === 6 ||
        index === 7 ||
        index === 8 ||
        index === 27 ||
        index === 28 ||
        index === 29 ||
        index === 30 ||
        index === 31 ||
        index === 32 ||
        index === 33 ||
        index === 34 ||
        index === 35 ||
        index === 54 ||
        index === 55 ||
        index === 56 ||
        index === 57 ||
        index === 58 ||
        index === 59 ||
        index === 60 ||
        index === 61 ||
        index === 62
      ) {
        cell.style.borderTop = "4px solid black";
      }
    });
  }

  useEffect(() => {
    createBorder();
  }, []);

  return (
    <table className="square-table">
      <p>Errors : {errors}</p>
      <tbody>
        {sudokuArr.map((grid, gridIndex) => {
          return (
            <tr key={gridIndex}>
              {grid.map((item, itemIndex) => {
                return (
                  <td key={`${gridIndex}${itemIndex}`}>
                    <input
                      className="cell not-filled"
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
