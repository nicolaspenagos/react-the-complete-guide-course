const redux = require("redux");

/*
Inputs: Old State + Dispatched Action
Output: New State Object
Should be a pure function (same input leads to same output)
*/

// IMPORTANT: Define as a default parameter a default state for the first execution
const counterReducer = (state = { counter: 0 }, action) => {
  //Executed by Redux

  // Validation to be able to performs different actions
  if (action.type === "increment")
    return {
      counter: state.counter + 1
    };

  if (action.type === "decrement")
    return {
      counter: state.counter - 1
    };

  return state;
};

const store = redux.createStore(counterReducer);

console.log(store.getState()); // Prints counter:1

/*
The first exceution triggred with createStore does not disptach any action
so does not trigger our subscriber
*/
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber); // Executed by Redux

/*
Type is a id for the kind of action, every different actions need an unique string
*/

store.dispatch({ type: "increment" }); // Prints 2

store.dispatch({ type: "decrement" }); // Prints 1
