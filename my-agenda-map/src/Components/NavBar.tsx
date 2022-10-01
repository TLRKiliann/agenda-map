import { Link } from 'react-router-dom';
import '../StylesComponents/NavBar.scss';

export const NavBar = () => {
  return (
    <div className="NavBar--div">
      <nav className="nav--div">
        <img
          width="90px" height="60px"
          src={imageLogo} alt="logo_koala"
        />
        <li>
          <Link to='/' >
            Meeting Point
          </Link>
        </li>
        <li>
          <Link to='/PhoneContact' >
            Phone Contacts
          </Link>
        </li>
        <li>
          <Link to='/MapMap' >
            Map
          </Link>
        </li>
      </nav>

      <div className="NavBar--login">
        <span>Login/Logout</span>
      </div>

    </div>
  )
}
