
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
<<<<<<< HEAD
import EventBind2 from './components/EventBind2'
=======
import ParentComponent1 from './components/ParentComponent1'
import UserGreeting3 from './components/UserGreeting3';
>>>>>>> 9718c7dd586d2cf2ead2cceeb376013475cdaa37

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <EventBind2 />
=======
      <UserGreeting3 />
>>>>>>> 9718c7dd586d2cf2ead2cceeb376013475cdaa37
      <hr />
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
      <Greet name="Denny" heroName="Developer">
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
