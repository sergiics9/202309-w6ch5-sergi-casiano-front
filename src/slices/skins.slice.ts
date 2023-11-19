import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Skin } from '../models/skin';
import { loadSkinsThunk, updateSkinsThunk } from './skins.thunk';

type SkinsState = {
  skins: Skin[];
  skinsState: 'idle' | 'loading' | 'error';
};

const initialState: SkinsState = {
  skins: [],
  skinsState: 'idle',
};

const skinsSlice = createSlice({
  name: 'skins',
  initialState,
  reducers: {},
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
