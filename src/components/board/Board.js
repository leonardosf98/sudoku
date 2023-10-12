import { useState, useEffect } from 'react';

function Board() {
    const initial = [[0,1,2,3,4,5,6,7,8],[9,10,11,12,13,14,15,16,17],[18,19,20,21,22,23,24,25,26],[27,28,29,30,31,32,33,34,35],[36,37,38,39,40,41,42,43,44],[45,46,47,48,49,50,51,52,53],[54,55,56,57,58,59,60,61,62],[63,64,65,66,67,68,69,70,71],[72,73,74,75,76,77,78,79,80]];

    const [sudokuArr] = useState(initial);

    const handleInputChange = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/);
    };

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
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
                    return (
                        <tr key={rIndex}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                                return (
                                    <td key={cIndex}>
                                        <input
                                            className='cell'
                                            value={sudokuArr[row][col]}
                                            onInput={handleInputChange}
                                            maxLength={1}
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