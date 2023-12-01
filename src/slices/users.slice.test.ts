import usersReducer, { UsersState } from './users.slice';

describe('Given usersReducer', () => {
  describe('When users/logout action is dispatch', () => {
    test('Then the new state will be returned', () => {
      const action = {
        type: 'users/logout',
      };
      const state: UsersState = {} as UsersState;
      const result = usersReducer(state, action);
      expect(result.loggedUser).toBe(null);
      expect(result.token).toBe('');
    });
  });

  describe('When users/login action is dispatch', () => {
    test('Then the new state will be returned', () => {
      const state: UsersState = {} as UsersState;
      const action = {
        type: 'login/pending',
      };

      const result = usersReducer(state, action);
      expect(result.loginState).toBe('logging');
    });
  });

  describe('When users/login action is dispatch', () => {
    test('Then the new state will be returned', () => {
      const state: UsersState = {} as UsersState;
      const action = {
        type: 'login/fulfilled',
        payload: {
          user: 'test user',
          token: 'token',
        },
      };

      const result = usersReducer(state, action);
      expect(result.loggedUser).toBe('test user');
      expect(result.token).toBe('token');
    });
  });
  describe('When users/login action is dispatch', () => {
    test('Then the new state will be returned', () => {
      const state: UsersState = {} as UsersState;
      const action = {
        type: 'loginWithToken/fulfilled',
        payload: {
          user: 'test user',
          token: 'token',
        },
      };

      const result = usersReducer(state, action);
      expect(result.loggedUser).toBe('test user');
      expect(result.token).toBe('token');
    });
  });
  describe('When users/login action is dispatch', () => {
    test('Then the new state will be returned', () => {
      const state: UsersState = {} as UsersState;
      const action = {
        type: 'login/rejected',
      };

      const result = usersReducer(state, action);
      expect(result.loginState).toBe('error');
    });
  });
});
