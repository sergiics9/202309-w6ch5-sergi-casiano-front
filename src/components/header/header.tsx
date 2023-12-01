import { UserButtons } from '../user.buttons/user.buttons';
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
          <UserButtons></UserButtons>
        </div>
      </header>
    </>
  );
}
