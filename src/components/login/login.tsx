import { SyntheticEvent, useState } from 'react';
import './login.scss';
import { LoginUser } from '../../models/user';
import { useUsers } from '../../hooks/use.users';
import { Link } from 'react-router-dom';

export function Login() {
  const { login } = useUsers();
  const [hasLogin, setHasLogin] = useState(false);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const loginUser: LoginUser = {
      email: formData.get('email')?.toString() as string,
      passwd: formData.get('passwd')?.toString() as string,
    };

    console.log(loginUser);
    login(loginUser);
    setHasLogin(true);
  };

  return (
    <>
      <div className="h3-container">
        <h3>LOG IN</h3>
      </div>
      <div className="register-form">
        {!hasLogin && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" required />
            <label htmlFor="passwd">Password: </label>
            <input type="password" name="passwd" required />
            <button className="button-register" type="submit">
              Log in
            </button>
          </form>
        )}
        {hasLogin && (
          <div>
            <Link to={'/'}>
              <p>Login correcto</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
