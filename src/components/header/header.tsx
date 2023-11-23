import { Link } from 'react-router-dom';
import './header.scss';

export function Header() {
  return (
    <>
      <header>
        <div className="container-header">
          <div className="container-logo">
            <div className="image-header">
              <img
                src="../../favicon.ico"
                alt="CS2 Header"
                width={80}
                height={80}
              />
            </div>
            <div className="logo">
              <h1>
                CS2 <span className="blue">SKINS</span>
              </h1>
            </div>
          </div>
          <div className="log-in-register-container">
            <Link to="/login">
              <button className="register">Log in</button>
            </Link>
            <Link to="/register">
              <button className="register">Register</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
