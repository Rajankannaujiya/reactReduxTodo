import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/todo/todoSlice';



function AddTodo() {

    const [input, setInput] = useState('')
    // useDispatch React-Redux se aata h wireup ke liye reduce toolkit ke sath
    // In the context of Redux, "dispatch" refers to the process of sending an action to the Redux store.
    // dispatch ek reducer ko use karte huye store me change karta h
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <form onSubmit={addTodoHandler} className='decorate'>
            <input type='text' className='inputField' placeholder='enter a todo' value={input} onChange={(e) => setInput(e.target.value)} />

            <button type='submit' >addTodo</button>


        </form>
    )
}

export default AddTodo;
