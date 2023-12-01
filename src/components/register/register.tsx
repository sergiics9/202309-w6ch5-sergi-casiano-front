import { SyntheticEvent, useState } from 'react';
import './register.scss';
import { useUsers } from '../../hooks/use.users';
import { Link } from 'react-router-dom';

export function Register() {
  const [hasRegister, setHasRegister] = useState(false);
  const { register } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    register(formData);
    setHasRegister(true);
  };

  return (
    <>
      <div className="h3-container">
        <h3>REGISTER</h3>
      </div>

      <div className="register-form">
        {!hasRegister && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" required />
            <label htmlFor="surname">Surname: </label>
            <input type="text" name="surname" required />
            <label htmlFor="age">Age: </label>
            <input type="number" name="age" required />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" required />
            <label htmlFor="passwd">Password: </label>
            <input type="password" name="passwd" required />
            <input type="file" name="avatar" />
            <button className="button-register" type="submit">
              Register
            </button>
          </form>
        )}
        {hasRegister && (
          <Link to={'/'}>
            <p>Registro correcto</p>
          </Link>
        )}
      </div>
    </>
  );
}
