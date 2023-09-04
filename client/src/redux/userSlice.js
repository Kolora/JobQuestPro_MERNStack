import { createSlice } from "@reduxjs/toolkit";
import { users } from "../utilis/data";
// import { dispatch } from "./store";

// const initialState = {
//   user: JSON.parse(window?.localStorage.getItem("userInfo")) ?? users[1],
// };

const initialState = {
  user: JSON.parse(window?.localStorage.getItem("userInfo")) ?? {},
}; //user does not exist in localStorage

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
    },
    logout(state) {
      state.user = null;
      localStorage?.removeItem("userInfo");
    },
  },
});

export default userSlice.reducer;

export function Login(user) {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.login({ user }));
  };
}

export function Logout() {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.logout());
  };
}
