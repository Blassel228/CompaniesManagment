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
    setAuthorizedUser(state, action: PayloadAction<any>) {
      state.user = action.payload.user;
    },
    clearAuthorizedUser(state) {
      state.user = null;
    },
  },
});

export const { setAuthorizedUser, clearAuthorizedUser } = authorizedUserSlice.actions;
export default authorizedUserSlice.reducer;
