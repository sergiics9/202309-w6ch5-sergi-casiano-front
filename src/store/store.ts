import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import skinsReducer from '../slices/skins.slice';
import usersReducer from '../slices/users.slice';

export const appStore = configureStore({
  reducer: {
    skinsState: skinsReducer,
    usersState: usersReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;

export type RootState = ReturnType<typeof appStore.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
