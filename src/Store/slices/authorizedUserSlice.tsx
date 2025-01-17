import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from "../../Types/User";


const initialState: User = {
    id: "",
    username: "",
    email: ""
};

const authorizedUserSlice = createSlice({
  name: 'authorizedUser',
  initialState,
  reducers: {
    setAuthorizedUser(state, action: PayloadAction<{ user: User }>) {
      state.id = action.payload.user.id;
      state.username = action.payload.user.username;
      state.email = action.payload.user.email;
    },
    clearAuthorizedUser(state) {
      state.id = "";
      state.username = "";
      state.email = "";
    },
  },
});

export const { setAuthorizedUser, clearAuthorizedUser } = authorizedUserSlice.actions;
export default authorizedUserSlice.reducer;
