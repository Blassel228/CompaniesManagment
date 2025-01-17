import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from "../../Types/User";

const initialState: { user: User | null } = {
  user: null,
};

const authorizedUserSlice = createSlice({
  name: 'authorizedUser',
  initialState,
  reducers: {
    setAuthorizedUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    clearAuthorizedUser(state) {
      state.user = null;
    },
  },
});

export const { setAuthorizedUser, clearAuthorizedUser } = authorizedUserSlice.actions;
export default authorizedUserSlice.reducer;
