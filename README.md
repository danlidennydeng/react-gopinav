https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9

React Tutorial by Codevolution

tried on white rock

git pulled on white rock and it works

Advanced concepts starts on lesson 25.

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