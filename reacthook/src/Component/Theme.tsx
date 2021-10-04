import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { AddTodo, store } from "../Store";



export const Todolist = ((props: any) => {
    let list = useSelector(state => (state));
    console.log(list)
    const [state, setState] = useState({ text: "" });
    return <>
        <input onChange={(e) => { setState({ ...state, text: e.currentTarget.value }) }} />
        <button onSubmit={() => {
            store.dispatch(AddTodo(state.text))
        }}>AJOUTER</button>

        {/* {list.map((el, i) => {
            console.log(el)
            return <p onClick={() => {
                store.dispatch({ type: 'remove', index: i });
            }}>{el}</p>
        })} */}
    </>
});