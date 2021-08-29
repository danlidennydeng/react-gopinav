import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>wei</p>
      </Greet>
    </div>
  );
}

export default App;
