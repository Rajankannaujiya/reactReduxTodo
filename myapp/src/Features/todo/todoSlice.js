import { createSlice,nanoid } from "@reduxjs/toolkit"; // nanoid generates unique ids

// initial state ko alag se declare karna jyada behtar hota hh
const initialState={
    todos:[{id:1,text:"hello world"}] // this object is the state
}

export const todoSlice =createSlice({
    // Slices ke naam hote hh jab hum reduce toolkit use karenge chrome extension ka to yahi naam show hoga aur iska koi importance nahi h
    name:'todo',
    initialState,
    reducers:{
        // addTodo:sayHello // you can do like this or 
        // addTodo ek property hai aur usko ek function dena hota h
        // if you are giving function here give only the reference

        // in reduce we write the function defination also
        addTodo: (state,action)=>{
            const todo={
                // nanoid generates the unique id
                id:nanoid(),
                // payload apne app me ek object hh
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            // filter gives only true value
           state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})

// ddTodo and removeTodo functionality ke hi through hi state me update karenge isiliye ye functionality individually 
// kaam aayega hamare components me
export const  {addTodo,removeTodo}=todoSlice.actions
// store KO bi awareness chahiye hoga reducers ko isliye isko sare reducers ka list chahiye hota h
export default todoSlice.reducer;
