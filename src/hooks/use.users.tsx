import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { ac } from '../slices/users.slice';
import { ApiRepoUsers } from '../services/api.repo.users';
import { LoginUser } from '../models/user';
import { loginThunk, loginTokenThunk } from '../slices/users.thunk';
import { Storage } from '../services/storage';

export function useUsers() {
  const dispatch = useDispatch<AppDispatch>();
  const repo = new ApiRepoUsers();
  const userStore = new Storage<{ token: string }>('user');

  const register = (newUser: FormData) => {
    repo.createUser(newUser);
  };

  const login = (loginUser: LoginUser) => {
    dispatch(loginThunk({ loginUser, repo, userStore }));
  };

  const loginWithtoken = () => {
    const userStoreData = userStore.get();
    if (userStoreData) {
      const token = userStoreData.token;
      dispatch(loginTokenThunk({ token, repo, userStore }));
    }
  };

  const logout = () => {
    dispatch(ac.logout());
    userStore.remove();
  };

  return {
    logout,
    login,
    register,
    loginWithtoken,
  };
}
