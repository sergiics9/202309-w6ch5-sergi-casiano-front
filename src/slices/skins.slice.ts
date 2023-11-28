import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Skin } from '../models/skin';
import { loadSkinsThunk, updateSkinsThunk } from './skins.thunk';

/* type UserState = {
  loggedUser: User | null;
  token: string;
  loggingState: 'idle' | 'logging' | 'error';
};

const initialStateUser: UserState = {
  loggedUser: null,
  token: '',
  loggingState: 'idle',
}; */

type SkinsState = {
  skins: Skin[];
  skinsState: 'idle' | 'loading' | 'error';
  currentSkin: Skin | null;
};

const initialState: SkinsState = {
  skins: [],
  skinsState: 'idle',
  currentSkin: null,
};

const skinsSlice = createSlice({
  name: 'skins',
  initialState,
  reducers: {
    setCurrentSkin: (
      state: SkinsState,
      { payload }: PayloadAction<Skin | null>
    ) => {
      state.currentSkin = payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadSkinsThunk.pending, (state: SkinsState) => {
      state.skinsState = 'loading';
      return state;
    });
    builder.addCase(
      loadSkinsThunk.fulfilled,
      (state: SkinsState, { payload }: PayloadAction<Skin[]>) => {
        state.skins = payload;
        state.skinsState = 'idle';
        return state;
      }
    );
    builder.addCase(loadSkinsThunk.rejected, (state: SkinsState) => {
      state.skinsState = 'error';
      return state;
    });
    builder.addCase(
      updateSkinsThunk.fulfilled,
      (state: SkinsState, { payload }: PayloadAction<Skin>) => {
        state.skins[state.skins.findIndex((item) => item.id === payload.id)] =
          payload;
        return state;
      }
    );
  },
});

export default skinsSlice.reducer;

export const { setCurrentSkin } = skinsSlice.actions;
