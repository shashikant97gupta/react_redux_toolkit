import { createSlice, nanoid, current, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
    userApiData:[],
    users:JSON.parse(localStorage.getItem("users")) || [],
}

export const fetchApiUser = createAsyncThunk("fetchApiUser", async() => {
    console.log("Action")
    let result = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log("Action", result)
    return result.json();
})

const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        addUsers:(state, action) => {
            const data={
                id:nanoid(),
                name:action.payload,
            }
            state.users.push(data);
            let userData = JSON.stringify(current(state.users))
            localStorage.setItem('users', userData)
        },
        removeThisUser:(state, action) => {
            const data= state.users.filter((item) => item.id != action.payload)
            state.users = [...data];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUser.fulfilled, (state, action) => {
            console.log("reducer", action)
            state.isLoading = false
            state.userApiData = action.payload
        })
    }
})

export const {addUsers, removeThisUser, } = Slice.actions;
export default Slice.reducer