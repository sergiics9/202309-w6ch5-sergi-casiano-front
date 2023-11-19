import { useCallback, useMemo } from 'react';
import { ApiRepo } from '../services/api.repo';
import { useDispatch } from 'react-redux';
import { loadSkinsThunk, updateSkinsThunk } from '../slices/skins.thunk';
import { AppDispatch } from '../store/store';
import { Skin } from '../models/skin';

export function useSkins() {
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new ApiRepo(), []);

  const loadSkins = useCallback(async () => {
    try {
      dispatch(loadSkinsThunk(repo));
    } catch (error) {
      // console.log((error as Error).message);
    }
  }, [repo]);

  const updateSkin = async (id: Skin['id'], skin: Partial<Skin>) => {
    try {
      dispatch(updateSkinsThunk({ id, repo, updateSkins: skin }));
    } catch (error) {
      // console.log((error as Error).message);
    }
  };

  return {
    loadSkins,
    updateSkin,
  };
}
