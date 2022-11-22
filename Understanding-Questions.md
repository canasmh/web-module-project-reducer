# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* addOne function is invoked, return an action object with a type property.
* The action object is passed into the reducer function, along with the slice of state, using dispatch.
* The reducer function examines the action type and performs relevant operation.
* slice of state is updated with new value
* TotalDisplay shows the total plus 1.
