
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'

import ParentComponent1 from './components/ParentComponent1'

function App() {
  return (
    <div className="App">
      <ParentComponent1 />
      <hr />
      
      <ClassClick />
      <hr />
      <FunctionClick />
      <hr />
      <Greet name="Bruce" heroName="Batman">
        <p>wei</p>
      </Greet>
      <hr />
      <Greet name="Clark" heroName="Superman">
        <button>Press</button>
      </Greet>
      <hr />
      <Greet name="Diana" heroName="Wonderwoman">
      <hr />
      </Greet>
      <hr />
      <Welcome name="Diana" heroName="Wonderwoman">
      <button>Press</button>
      </Welcome>
      <hr />
      <Message />
<hr />
      <Counter />
    </div>
  );
}

export default App;
