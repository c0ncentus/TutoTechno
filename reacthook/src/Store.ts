import { combineReducers, createStore } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';


// ACTION
export const AddTodo = (item: string) => { return { type: "ADD_TODO", item: item } }
export const RemoveTodo = (index: number) => { return { type: "REMOVE_TODO", index: index } }
const initState = {
    todos: [] as any[],
};

interface ReducerTodo {
    index?: number,
    item?: string,
    type: string
}
// REDUCER
const todoReducer = (state = initState, action: ReducerTodo) => {
    let newState = cloneDeep(state);
    if (action.type === 'ADD_TODO') { newState.todos.push(action.item!); }
    if (action.type === 'REMOVE_TODO') { newState.todos.splice(action.index!, 1); }
    return newState;
};

// STORE

export const store = createStore(combineReducers({ todos: todoReducer }));

// Display in the console
// store.subscribe(()=>{console.log(store.getState())})

//DISPACH [Exec]
// store.dispatch(AddTodo(state.text))