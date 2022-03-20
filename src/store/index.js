//import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

//const store = createStore(counterSlice.reducer);
const store = configureStore({ 
    reducer: counterSlice.reducer
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

export const counterActions = counterSlice.actions;
export default store;