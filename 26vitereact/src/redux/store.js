import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})


// Step 1: create store
// Step 2: wrap <App /> component under Provider
// Step 3: create Slice
// Step 4: register reducer in store