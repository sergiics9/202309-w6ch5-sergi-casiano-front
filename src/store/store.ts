import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import skinsReducer from '../slices/skins.slice';

export const store = configureStore({
  reducer: {
    skinsState: skinsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
