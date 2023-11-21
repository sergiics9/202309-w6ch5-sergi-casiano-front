import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepo } from '../services/api.repo';
import { ApiResponse, Skin } from '../models/skin';

export const loadSkinsThunk = createAsyncThunk<ApiResponse, ApiRepo>(
  'skins/load',
  async (repo) => {
    const skins = await repo.getSkins();
    return skins;
  }
);

export const updateSkinsThunk = createAsyncThunk<
  Skin,
  {
    repo: ApiRepo;
    id: Skin['id'];
    updateSkins: Partial<Skin>;
  }
>('skins/update', async ({ repo, id, updateSkins }) => {
  const finalSkins = await repo.updateSkin(id, updateSkins);
  return finalSkins;
});
