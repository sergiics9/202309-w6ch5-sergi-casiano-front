import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useUsers } from '../../hooks/use.users';
import './user.buttons.scss';
import { makeImageUrl } from '../../services/images';

export function UserButtons() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  const { logout } = useUsers();

  const userImage = loggedUser && makeImageUrl(loggedUser.avatar.publicId, 50);

  return (
    <>
      <section className="log-in-register-container">
        {!loggedUser && (
          <>
            {' '}
            <Link to="/register">
              <button className="register">Register</button>
            </Link>
            <Link to="/login">
              <button className="register">Login</button>
            </Link>
          </>
        )}
        {loggedUser && (
          <>
            <Link to="/">
              <button className="register" onClick={logout}>
                Logout
              </button>
              <p>Hola {loggedUser.name}</p>
              <img src={userImage!} alt="User avatar" />
            </Link>
          </>
        )}
        {loggedUser && loggedUser.role === 'Admin' && <p>Cosas de admin</p>}
      </section>
    </>
  );
}
