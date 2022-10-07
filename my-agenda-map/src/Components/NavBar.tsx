import { Link } from 'react-router-dom';
import imageLogo from '../assets/images/koala_tree.png'
import '../StylesComponents/NavBar.scss';

export const NavBar = () => {
  return (
    <div className="navbar--div">

      <div className="subnavbar">

        <div className="nav--div">
          <img
            className="img--tag"
            width="60px" height="60px"
            src={imageLogo} alt="logo_koala"
          />
        </div>

        <nav className="middlenav--div">
          <li>
            <Link className="tag--link" to='/' >
              Login
            </Link>
          </li>
          <li>
            <Link className="tag--link" to='/PhoneContact' >
              Phone Contacts
            </Link>
          </li>
          <li>
            <Link className="tag--link" to='/MeetingPoint' >
              Meeting Point
            </Link>
          </li>
        </nav>

        <div className="navbar--login">
          <span>Login/Logout</span>
        </div>
      </div>
    </div>
  )
}
