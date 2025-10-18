import React, {Component} from 'react';
import './App.css';
// import MyComponent from './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Recruit from './components/Recruit';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import PapaComponent from './components/PapaComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA'; 
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Couter1 from './components/Couter1';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

class App extends Component {
  render(){
    return (
      <div className="App">
      {/* These are the Custom tags */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}

      <ErrorBoundary >
      <Hero heroName = "Batman" />
      </ErrorBoundary >

      <ErrorBoundary >
      <Hero heroName = "Superman" />
      </ErrorBoundary >

      <ErrorBoundary >
      <Hero heroName = "Joker" />
      </ErrorBoundary >

      {/* <ClickCounter name = 'John'/> */}
      {/* <ClickCounterTwo /> */}
      {/* <HoverCounter /> */}
      {/* <HoverCounterTwo /> */}
      {/* <User render ={ (isLoggedIn) => isLoggedIn ? 'John' : 'Guest'} /> */}
      
      <Couter1>{(count, incrementCount) => (
      <ClickCounterTwo count = {count} incrementCount = {incrementCount}/>
       )}</Couter1> 
  
      <Couter1>{(count, incrementCount) => (
      <HoverCounterTwo count = {count} incrementCount = {incrementCount}/>
      )}</Couter1>

      <UserProvider value = "John">      
      <ComponentC />
      </UserProvider>
      <Table />
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <ClassCounterOne /> */}
      {/* <EventBind/> */}
      {/* <ParentComponent /> */}
      {/* <PapaComponent /> */}
      <UserGreeting />
       <NameList /> 
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />

      <Stylesheet primary={true}/>
      {/* <Message />
      <Recruit />
      <Counter />
      <FunctionClick />
      <ClassClick />

      <Greet name="Bruce" heroName="Batman">
      <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
        </Greet>
      <Greet name="Diana" heroName="Wonder Woman" /> */}

      {/* <Component /> */}
      {/* <Hello /> */}

      {/* <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana" heroName="Wonder Woman"/> */}

    </div>
    );
  }
  }

export default App;
