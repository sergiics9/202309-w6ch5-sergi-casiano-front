import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../types/login.response';
import { LoginUser } from '../models/user';
import { ApiRepoUsers } from '../services/api.repo.users';

export const loginThunk = createAsyncThunk<
  LoginResponse,
  {
    loginUser: LoginUser;
    repo: ApiRepoUsers;
  }
>('login', async ({ loginUser, repo }) => {
  return await repo.login(loginUser);
});

export const loginTokenThunk = createAsyncThunk<
  LoginResponse,
  {
    token: string;
    repo: ApiRepoUsers;
  }
>('loginWithToken', async ({ token, repo }) => {
  return await repo.loginWithToken(token);
});
