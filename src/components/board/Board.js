import { useState, useEffect } from 'react';

function Board() {
    const EMPTY = null;

    const initial = [
        [5, EMPTY, EMPTY, 8, EMPTY, EMPTY, 4, 6, 1],
        [EMPTY, 4, 9, 5, 1, EMPTY, EMPTY, EMPTY, 8],
        [1, 8, 2, 3, EMPTY, 4, EMPTY, EMPTY, EMPTY],
        [2, EMPTY, 4, EMPTY, EMPTY, EMPTY, EMPTY, 1, 5],
        [1, EMPTY, EMPTY, 4, 7, 5, EMPTY, EMPTY, EMPTY],
        [5, EMPTY, EMPTY, EMPTY, EMPTY, 1, 8, 4, 6],
        [EMPTY, EMPTY, 8, 1, 3, 2, EMPTY, EMPTY, EMPTY],
        [EMPTY, 6, 2, EMPTY, EMPTY, EMPTY, 8, 5, EMPTY],
        [EMPTY, 1, EMPTY, EMPTY, EMPTY, EMPTY, 2, EMPTY, EMPTY],
      ];
      
    const [sudokuArr, setSudokuArr] = useState(initial);

    const handleInputChange = (gridIndex, itemIndex, event) => {
        const { value } = event.target;
        if((isNaN(parseInt(value)) && value !== '') || value.length > 1) return;

        setSudokuArr((oldState) => {
            const copyArray = [...oldState];
            copyArray[gridIndex][itemIndex] = value;            
            return copyArray;
        });
        checkRow(gridIndex,event);
    };
    function checkRow(gridIndex,event){
        let value = parseInt(event.target.value);
        sudokuArr[gridIndex].map((item) => {
       if (item === value){
      }})
    }
    console.log(sudokuArr[0][2]);
    function checkGrid(){

    }
    function checkColumn(){

    }
    function createBorder() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
            if ((index + 1) % 3 === 0) {
                cell.style.borderRight = '4px solid black';
            }
            if (index === 0 || index % 9 === 0) {
                cell.style.borderLeft = '4px solid black';
            }
            if (index > 71) {
                cell.style.borderBottom = '4px solid black';
            }
            if (index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8 || index === 27 || index === 28 || index === 29 || index === 30 || index === 31 || index === 32 || index === 33 || index === 34 || index === 35 || index === 54 || index === 55 || index === 56 || index === 57 || index === 58 || index === 59 || index === 60 || index === 61 || index === 62) {
                cell.style.borderTop = '4px solid black';
            }
        });
    }

    useEffect(() => {
        createBorder();
    }, []);

    return (
        <table className='square-table'>
            <tbody>
                {sudokuArr.map((grid, gridIndex) => {
                    return (
                        <tr key={gridIndex}>
                            {grid.map((item, itemIndex) => {
                                return (
                                    <td key={`${gridIndex}${itemIndex}`}>                                        
                                        <input
                                            className='cell'
                                            value={item ?? ''}
                                            onChange={function (event) {
                                                handleInputChange(gridIndex, itemIndex, event)
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