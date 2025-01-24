import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from "../../Types/User";

const initialState: { user: User | null } = {
  user: null
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
      setProfileImage(state, action: PayloadAction<string>) {
          if (state.user) {
            console.log("Updating profileImage", action.payload);
            state.user.profileImage = action.payload;
          }
      },
    },
  },
);

export const { setAuthorizedUser, clearAuthorizedUser, setProfileImage } = authorizedUserSlice.actions;
export default authorizedUserSlice.reducer;
