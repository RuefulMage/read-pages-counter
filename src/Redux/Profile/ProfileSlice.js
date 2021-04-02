import { createSlice } from '@reduxjs/toolkit';

const SLICE_NAME = 'profile';
const initialState = {
  isAuth: false,
  login: '',
  fullName: '',
  email: '',
}

const profileSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    login: (state, action)  => {
      state.isAuth = true;
      state.login = action.payload.login;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
    },
    logout: state => {
      state = initialState;
    },
  },
});

const reducer = profileSlice.reducer;
const { login, logout } = profileSlice.actions;

export {
  reducer,
  login,
  logout
};