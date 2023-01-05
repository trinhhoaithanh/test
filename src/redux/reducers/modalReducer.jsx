import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
    component: <div>default 123</div>
}

const modalReducer = createSlice({
  name: 'modalReducer',
  initialState,
  reducers: {
    setModalContentAction: (state,action) => {
        state.component = action.payload;
    }
  }
});

export const {setModalContentAction} = modalReducer.actions

export default modalReducer.reducer