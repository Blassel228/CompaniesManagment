import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import authorizedUserSlice from './slices/authorizedUserSlice';
import usersSlice from './slices/usersSlice';
import fetchedUserSlice from "./slices/fetchedUserSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'userSession',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, authorizedUserSlice);

const store = configureStore({
  reducer: {
    users: usersSlice,
    fetchedUser: fetchedUserSlice,
    user: persistedUserReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
