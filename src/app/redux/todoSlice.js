import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[],
}

export const Slice = createSlice({
    name:'todosSlice',
    initialState,
    reducers:{
        addTodos : (state, action) => {
            let data = {
                id: nanoid(),
                name: action.payload,
            }
            state.todos.push(data)
        }, 
    }
})

export const { addTodos } = Slice.actions;
export default Slice.reducer;