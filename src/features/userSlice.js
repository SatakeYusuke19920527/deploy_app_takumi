import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    uid: "",
    email: "",
    displayName: "",
    photoUrl: "",
    lineuid: ""
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    lineLogin: (state, action) => {
      state.user.lineuid = action.payload.lineuid
      state.user.displayName = action.payload.displayName
      state.user.photoUrl = action.payload.photoUrl
    },
    logout: (state) => {
      state.user = initialState.user
    },
    updateUserProfile: (state, action) => {
      state.user.displayName = action.payload.displayName;
    }
  },
});

export const { login,lineLogin, logout,updateUserProfile } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;