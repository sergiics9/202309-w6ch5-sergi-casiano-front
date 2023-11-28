import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { ac } from '../slices/users.slice';
import { ApiRepoUsers } from '../services/api.repo.users';
import { LoginUser, User } from '../models/user';
import { loginThunk, loginTokenThunk } from '../slices/users.thunk';

export function useUsers() {
  const { token } = useSelector((state: RootState) => state.usersState);
  const dispatch = useDispatch<AppDispatch>();
  const repo = new ApiRepoUsers();

  const register = (newUser: Partial<User>) => {
    repo.createUser(newUser);
  };

  const login = (loginUser: LoginUser) => {
    dispatch(loginThunk({ loginUser, repo }));
  };

  const loginWithtoken = () => {
    dispatch(loginTokenThunk({ token, repo }));
  };

  const logout = () => {
    dispatch(ac.logout());
  };

  return {
    logout,
    login,
    register,
    loginWithtoken,
  };
}
