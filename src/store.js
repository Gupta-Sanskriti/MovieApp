import {configureStore} from '@reduxjs/toolkit'
import bookmarkSlice from './Redux/bookmarkSlice';

const store = configureStore({
    reducer:{
        bookmark: bookmarkSlice,
    }
})
export default store;