import {configureStore} from '@reduxjs/toolkit';
import modalReducer from './reducers/modalReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';


export const store = configureStore({
    reducer: {
        productReducer:productReducer,
        userReducer:userReducer,
        modalReducer:modalReducer
    }
})