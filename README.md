https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9

React Tutorial by Codevolution
Advanced concepts starts on lesson 25.
-------------------------------------------------------------------------------------------------------------------

Prerequisites:
----------------
HTML, CSS and JavaScript fundamentals
JavaScript - "this" keyword, filter, map and reduce
ES6 - let & const, arrow functions, template literals, default parameters, object literals, rest and spread operators and destructuring assignment.
------------------------------------------------------------------------------
JSX

is extension to the javascript language syntax.
is not necessity to write react application.
ultimately transpiles to pure javascript which is understood by the browser.

====================================================
Stateless Functional Component vs. Stateful Class Component

Functional:

* Use functional components as much as possible
* Absence of 'this' keyword, which can be confused.
* Solution without using state
* Mainly responsible for the UI
* Stateless/Dump/Presentational

Class:

* Maintain their own private data - state
* Complex UI logic
* Provide lifecycle hooks
* Stateful/Smart/Container

-------------------------------------------------------------------------------------------------------------------
Hooks
-----
No breaking changes
completely opt-in & 100% backwards-compatible
whatever we have learned the react without hooks still holds good.
component types - Functional components and Class components.
using state, lifecycle methods and 'this' binding
---------------------------------------------------------------------


props vs. state

props:

* props get passed to the component
* function parameters
* props are immutable
* props - functional components
* this.props - class components

state:

* state is managed within the component
* Variable declared in the function body
* state can be changed
* useState Hook - functional components
* this.state - class components

-------------------------------------------------------------------------------------------------------------------

setState

* always make use of setState and never modify the state directly
* if the code has to be executed after the state has been updated, place that code in the call back function which is the second argument to the setState method.
* When you have to update state based on the previous state value, pass in a function as argument instead of the regular object.

-------------------------------------------------------------------------------------------------------------------

Lists and Keys

* A "key" is a special string attribute you need to include when creating lists of elements.
* Keys give the elements a stable identity
* Keys help React identify which items have changed, are added.
* Help in efficient update of the user interface.

-------------------------------------------------------------------------------------------------------------------

Index as Key

* The items in your list do not have a unique id.
* The list is a static list and will not change.
* the list will never be reordered or filtered.
* Only use index as key as last resource.

------------------------------------------------------------------------------------------------------------------

Lifecycle Methods
are only for Class components

* Mounting, when an instance of a component is being created and inserted into the DOM
1. constructor, 2. static getDrivedStateFromProps, 3. render and 4. componentDidMount

* Updating, when a component is being re-rendered as a result of changes to either its props or state
1. static getDerivedStateFromProps, 2. shouldComponentUpdate, 3. render, 4. getSnapshotBeforeUpdate, and 5. componentDidUpdate

* Unmounting, when a component is being removed from the DOM
1. componentWillUnmount

* Error Handling, when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
1. static getDerivedStateFromError and 2. componentDidCatch

-----------------------------------------------------------------------------------------------------------------
Mounting Lifecycle Methods

1. constructor(props):

* A special function that will get called whenever a new component is created
* Initializing state binding the event handler
* Do not casue side effects. Ex: HTTP requests
* super(props) directly overwrite this.state

2. static getDerivedStateFromProps(props, state):

* when the state of the component depends on changes in props over time
* Set the state
* do not casue side effects. Ex: HTTP requests

3. render():

* ONLY required method
* Read props & state and return JSX
* Do not change state or interact with DOM or make ajax calls
* Children components lifecycle methods are also executed.

4. componentDidMount():

* Cause side effects. Ex: Interact with the DOM or perform any ajax calls to load data.

----------------------------------------------------------------------------------------------------------------

Updating Lifecycle Methods

1. static getDerivedStateFromProps(props, state):

* Method is called every time a component is re-rendered
* Set the state
* Do not casue side effects. Ex: HTTP requests 

2. shouldComponentUpdate(nextProps, nextState):

* Dictates if the component should re-render or not
* Performance optimization
* Do not cause side effect. Ex: HTTP requests or calling the setState method
* rarely used

3. render(): 

* ONLY required method
* Read props & state and return JSX
* Do not change state or interact with DOM or make ajax calls
* use very offen

4. getSnapshotBeforeUpdate(prevProps, prevState):

* Called right before the changes from the virtual DOM are to be reflected in the DOM
* Capture some information from the DOM
* Method will either return null or return a value. Returned value will be passed as the third parameter to the next method.
* rarely used

5. componentDidUpdate(prevProps, prevState, snapshot):

* Called after the render is finished in the re-render cycles.
* Cause side effects
* use very offen

-----------------------------------------------------------------------------------------------------------------

Unmounting Phase Method

1. componentWillUnmount():

* Method is invoked immediately before a component is unmounted and destroyed.
* Cancelling any network requests, removing event handlers, canceling any subscriptions and also invalidating timers.
* Do not call the setState method

----------------------------------------------------------------------------------------------------------------

Error Handling Phase Method

1. static getDerivedStateFromError(error):

2. componentDidCatch(error, info)

* When there is an error either during rendering, in a lifecycle method, or in the constructor of any child component.

---------------------------------------------------
Pure Component

A regular component does not implement the shouldComponentUpdate method. It always return true by default.

A pure component on the other hand implements shouldComponentUpdate with a shallow props and state comparison.

Shallow Comparison of prevState with currentState = Shallow Comparsion of prevProps with currentProps, no Re-render Pure component

Shallow Comparsion (SC)

Primitive Types
a(SC)b returns true if a and b have the same value and are of the same type
Ex: string "Denny" (SC) string "Denny" returns true

Complex Types
a(SC)b returns true if a and b reference the exact same object.
var a [1,2,3]
var b [1,2,3]
var c = a

var ab_eq = (a ==== b); // false, due to different references.
var ac_eq = (a ==== c); // true since they point to the same references.

Pure Component can stop unnessary re-rendering if the props and state are the same, this leads to performance boost.

Summary

* We can create a component by extending the PureComponent class
* A PureComponent implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the component
* If there is no difference, the component is not re-rendered - performance boost.
* It is a good idea to ensure that all the children component are also pure to avoid unexpected behaviour.
* Never muteate the state. Always return a new object that reflects the new state.

---------------------------------------------------------------------------------------

memo works as the same way as PureComponent for function instead of class.

Ref can work in class, cannot work in function.

---------------------------------------------------------------------------------------

Error Boundary

A class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary.

The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information.

Summary

Error boundaries are React components that catch JavaScript error in their child component tree, log those errors, and display a fall-back UI.

A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods

The placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem.

Provide a way to gracefully handler error in application code.

(cannot catch event handling error, use JavaScript try and catch) 
----------------------------------------------------------------------------------------

Why Higher Order Components?

to share common functionality between components

A pattern where a function takes a component as an argument and returns a new component.

const NewComponent = higherOrderComponent(orginalComponent)
const EnhancedComponent = higherOrderComponent(orginalComponent)

const IronMan = withSuit(TonyStark)

-------------------------------------------------------------------------

Render Props

The term "render props" refers to a technique for sharing code between React components using a prop whose value is a function.
---------------------------------------------------------------------------------------

Context

Context provide a way to pass data through the component tree without having to pass props download manually at every level.

1. Create the context
2. provide a context value
3. consume the context value.
