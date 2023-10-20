import Board from "./components/board/Board";
import HelpIcon from "./components/help-icon/help-icon";
import ErrorPanel from "./components/errors-panel/error-panel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Sudoku</h1>
      </header>
      <main>
        <ErrorPanel />
        <Board />
        <HelpIcon />
      </main>
    </div>
  );
}

export default App;
