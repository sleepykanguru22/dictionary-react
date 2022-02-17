import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>
        Dictionary App <br />
        📖+👋🏽
      </h1>
      <p>
        <Dictionary defaultKeyword="dictionary" />
      </p>
    </div>
  );
}

export default App;
