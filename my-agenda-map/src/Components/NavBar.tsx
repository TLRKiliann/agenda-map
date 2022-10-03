import { Link } from 'react-router-dom';
//import { imageLogo } from '../assets/image.png'
import '../StylesComponents/NavBar.scss';

export const NavBar = () => {
  return (
    <div className="NavBar--div">
      <nav className="nav--div">


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

/*
        <img
          width="90px" height="60px"
          src={imageLogo} alt="logo_koala"
        />
*/