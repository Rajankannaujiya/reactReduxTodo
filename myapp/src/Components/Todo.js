import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { removeTodo } from '../Features/todo/todoSlice';

function Todo() {
   // access deta h store ka
   const todos= useSelector(state=>state.todos)
   const dispatch=useDispatch()
  return (
    <>
    
        <div>Todos</div>
        <div>
        {todos.map((todo)=>(
        <li key={todo.id}>
        {todo.text}
        <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>

        </li>
    ))}
        </div>
    </>
  )
}

export default Todo;
