import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
    name:'bookmark',
    initialState:{
        bookval:['hello']
    },
    reducers:{
        addItem:(state, action )=>{
            state.bookval.push(action.payload)
        }
        // removeItem:(state, action)  =>{
        //     state.bookval.map()
        // }
    }
})
export const {addItem} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;