//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

//const store = createStore(counterSlice.reducer);
const store = configureStore({ 
    reducer: { counter: counterReducer, auth: authReducer }
});

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {counter: state.counter + 1, showCounter: state.showCounter };
//         case 'INCREASE':
//             return {counter: state.counter + action.amount, showCounter: state.showCounter };
//         case 'DECREMENT':
//             return {counter: state.counter - 1, showCounter: state.showCounter };
//         case 'TOGGLE':
//             return {counter: state.counter, showCounter: !state.showCounter }
//         default:
//             return {counter: state.counter, showCounter: state.showCounter };
//     }
// };

//const store = createStore(counterReducer);
export default store;