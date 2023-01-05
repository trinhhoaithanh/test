//rxlice

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { http } from '../../util/config';

const initialState = {
    arrProduct: [
        { id: 1, name: 'product1', image: 'https://i.pravatar.cc?u=1', price: 1000 },
        { id: 2, name: 'product2', image: 'https://i.pravatar.cc?u=2', price: 2000 },
    ],
    productDetail: null,
    carts: [
        
    ]
}

const productReducer = createSlice({
    name: 'productReducer', //Tên reducer
    initialState, //giá trị state mặc định
    reducers: {
        getAllProductApi: (state, action) => {
            state.arrProduct = action.payload;
        },
        getDetailProductAction: (state, action) => {
            state.productDetail = action.payload;
        },
        getCartsAction: (state, action) => {
            state.carts = [...state.carts, action.payload]
        },
        getNewCartsAction: (state, action) => {
            const newCarts = state.carts.map(cart => cart.id === action.payload.id ? {
                ...cart,
                quantity: action.payload.quantity
            } : cart)
            state.carts = newCarts
        },
        deleteCartAction: (state, action) =>{
            console.log(action);
            const newCarts = state.carts.filter(cart => cart.id !== action.payload)
            state.carts = newCarts
        }
    }
});

export const { getAllProductApi, getDetailProductAction, getCartsAction, getNewCartsAction, deleteCartAction } = productReducer.actions

export default productReducer.reducer


/* async action */ //closure function
export const getProductApi = () => {
    return async (dispatch2) => {
        const result = await http.get('/api/product');

        //Sau khi có được dữ liệu từ api ta tạo ra action loại 1 {type,payload đưa lên redux}
        // const action = {
        //   type: 'productReducer/getAllProductApi',
        //   payload: result.data.content
        // };
        const action = getAllProductApi(result.data.content)

        dispatch2(action);
    }
}
//action creator = {type,payload};
//action async = (dispatch) => { ... }

export const getDetailProductApi = (id) => {

    return async (dispatch) => {
        const result = await http.get(`/api/product/getbyid?id=${id}`);

        //Sau khi lấy dữ liệu từ api về thì đưa dữ liệu lên reducer thông qua hàm action creator
        const action = getDetailProductAction(result.data.content);
        dispatch(action);
    }
}
export const addCarts = (cart) => {
    return async (dispatch) => {
        const action = getCartsAction(cart)
        dispatch(action)
    }
}
export const changeCartQuantity = (id, quantity) => {
    return async (dispatch) => {
        const payload = { id, quantity }
        const action = getNewCartsAction(payload)
        dispatch(action)
    }
}
export const deleteCart = (id) =>{
    return async (dispatch) =>{
        const action = deleteCartAction(id)
        dispatch(action)
    }
}