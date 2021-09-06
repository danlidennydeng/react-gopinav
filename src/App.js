
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import ParentComponent1 from './components/ParentComponent1'
import UserGreeting3 from './components/UserGreeting3'
import NameList2 from './components/NameList2'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Success</h2>
      <Inline />
      <hr />
       <Stylesheet primary={true}/>
      <hr />
      <NameList />
      <hr />
      <NameList2 />
      <hr />
      <UserGreeting3 />
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
