import { ApiRepoUsers } from '../services/api.repo.users';
import { appStore } from '../store/store';
import { loginThunk } from './users.thunk';
import { Storage } from '../services/storage';
import { LoginUser } from '../models/user';

describe('Given...', () => {
  describe('When we instantiate', () => {
    test('Then it should be...', async() => {
      const data = {
        repo: ApiRepoUsers;
        userStore: Storage<{
          token: string
        }>,
      } = {
        loginUser: {} as LoginUser
        repo: {
          login: jest.fn().mockReturnValue({
            token: '',
          }),
        } as unknown as ApiRepoUsers ,
        userStore: {
          set: jest.fn()
        } as unknown as Storage<{
          token: string;
        }>,
      });
      await appStore.dispatch(loginThunk(data));

      expect(data.repo.login).toHaveBeenCalled()
      expect(data.userStore.set).toHaveBeenCalled()
    });
  });
});
