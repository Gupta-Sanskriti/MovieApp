import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
    name:'bookmark',
    initialState:{
        bookval:[],
        bookcolor: 'text-yellow-500'
    },
    reducers:{
        addItem:(state, action )=>{
            state.bookval.push(action.payload)
        },
        changeBookColor:(state, action)=>{
            
        }
        // removeItem:(state, action)  =>{
        //     state.bookval.map()
        // }
    }
})
export const {addItem, changeBookColor} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;