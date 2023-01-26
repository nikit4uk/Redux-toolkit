import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkit from './toolkitSlice';

const rootReducer = combineReducers({
    toolkit: toolkit
})

export const store = configureStore({
    reducer: rootReducer,

})