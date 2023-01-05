//rxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { history } from '../../index';
import { ACCESS_TOKEN, getStore, getStoreJson, http, saveStore, saveStoreJson, USER_LOGIN, USER_PROFILE, USER_REGISTER } from '../../util/config';

const initialState = {
    userLogin: getStoreJson(USER_LOGIN),
    userProfile: getStoreJson(USER_PROFILE),
    userRegister:getStore(USER_REGISTER)
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.userLogin = action.payload;
        },
        getProfileAction: (state,action) => {
            state.userProfile = action.payload
        },
        
        updateProfileAction:(state,action)=>{
            state = action.payload
        },
        registerAction:(state,action)=>{
            state.userRegister = action.payload
        }
        
    }
});

export const {updateProfileAction,registerAction, loginAction,getProfileAction } = userReducer.actions

export default userReducer.reducer

/* async action */
//userLogin = {email,password}
export const loginApi = (userLogin) => {
    return async dispatch => {
        const result = await http.post('/api/Users/signin',userLogin);
        console.log('obDangNhap', result.data.content);
        //Cập nhật cho reducer
        const action = loginAction(result.data.content);
        dispatch(action);
        //Lưu localstorage
        saveStoreJson(USER_LOGIN, result.data.content);
        saveStore(ACCESS_TOKEN, result.data.content.accessToken);
        //Gọi axios lấy dữ liệu api từ token  
        //Gọi api getprofile
        const actionGetProfile = getProfileAction();
        dispatch(actionGetProfile);

        history.push('/profile');
    }
}


export const getProfileApi = () => {
    return async (dispatch) => {
        const result = await http.post('/api/Users/getProfile');
        // cập nhật cho reducer
        const action = getProfileAction(result.data.content);
        dispatch(action);
        console.log(result.data.content)
        saveStoreJson(USER_PROFILE, result.data.content)
      };
}
export const registerApi=(userRegister)=>{
    return async dispatch=>{
        const result = await http.post('/api/Users/signup',userRegister);
        const action = registerAction(result.data.content);
        console.log(action);
        dispatch(action);
        
        //Lưu localstorage
        saveStoreJson(USER_REGISTER,result.data.content);
        alert("Đăng ký tài khoản thành công");
        history.push('/login'); 
        
    }
}
export const updateProfileApi=(updateProfile)=>{
    return async dispatch => {
    const result = await http.post('/api/Users/updateProfile', updateProfile);
      const action = updateProfileAction(result.data.content);
      dispatch(action);
      
  
  }
}