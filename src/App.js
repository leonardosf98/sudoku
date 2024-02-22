import './App.css';
import Board from './components/board/Board';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Sudoku</h1>
      </header>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;
