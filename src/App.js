import Board from "./components/board/Board";
import "./App.css";

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
