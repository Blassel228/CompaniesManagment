import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from "../../Types/User";


const initialState: User = {
    id: "",
    username: "",
    email: ""
};

const fetchedUserSlice = createSlice({
  name: 'fetchedUser',
  initialState,
  reducers: {
    setFetchedUser(state, action: PayloadAction<User>) {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    clearFetchedUser(state) {
      state.id = "";
      state.username = "";
      state.email = "";
    },
  },
});

export const { setFetchedUser, clearFetchedUser } = fetchedUserSlice.actions;
export default fetchedUserSlice.reducer;
