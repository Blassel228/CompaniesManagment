import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User} from "../../Types/User.tsx";

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    clearUsers(state) {
      state.users = [];
    },
  },
});

export const { setUsers, clearUsers } = usersSlice.actions;

export default usersSlice.reducer;
