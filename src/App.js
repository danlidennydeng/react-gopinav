
import './App.css';
import HoverCounterTwo from './components/HoverCounterTwo';
import ClickCounterTwo from './components/ClickCounterTwo';
import CounterTwo from './components/CounterTwo';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ErrorBoundary from './components/ErrorBoundary';
// import HeroError from './components/HeroError';
// import PortalDemo from './components/PortalDemo';


function App() {
  return (
    <div className="App">
      <CounterTwo render={(count, incrementCount) => (
      <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )}
      />

      <CounterTwo render={(count, incrementCount) => (
      <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )}
      />

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={ (isLoggedIn) => isLoggedIn ? 'denny': 'Guest' } /> */}
      {/* <ClickCounter name='denny' />
      <hr />
      <HoverCounter />
      <hr /> */}
      {/* <ErrorBoundary>
      <HeroError heroName="Batman" />
      <HeroError heroName="superman" />
      <HeroError heroName="Joker" />
      </ErrorBoundary>
      <hr />
      <PortalDemo /> */}
      
      
      
    </div> 
  );
}

export default App;

// import FocusInput from './components/FocusInput';
//import FRParentInput from './components/FRParentInput';
// import RefsDemo from './components/RefsDemo';
//import ParentComp2 from './components/ParentComp2';
//import ParentCompMemo from './components/ParentCompMemo';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import ParentComponent1 from './components/ParentComponent1'
// import UserGreeting3 from './components/UserGreeting3'
// import NameList2 from './components/NameList2'
// import NameList from './components/NameList'
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form'
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';

{/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp />
      <hr /> */}
      {/* <Table />
      <hr />
      <FragmentDemo />
      <hr />
      <LifecycleA />
      <hr />
      <Form />
      <hr />
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
      <hr /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>wei</p>
      </Greet>
      <hr />
      <Greet name="Clark" heroName="Superman">
        <button>Press</button>
      </Greet>
      <hr />
      <Greet name="Denny" heroName="Developer">
      </Greet>
      <hr /> */}
      {/* <Welcome name="Diana" heroName="Wonderwoman">
      <button>Press</button>
      </Welcome>
      <hr />
      <Message />
<hr />
      <Counter />*/}