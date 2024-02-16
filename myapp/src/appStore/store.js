import { configureStore } from "@reduxjs/toolkit";
import todReducer from '../Features/todo/todoSlice';
 

export const store=configureStore({
   reducer:todReducer
}) ///it takes object in it