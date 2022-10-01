import { NavLink } from 'react-router-dom';
import '../StylesComponents/NavBar.scss';

export const NavBar = () => {
  return (
    <div className="NavBar--div">
      <Nav className="Nav--div">
        <img
          width="90px" height="60px"
          src={imageLogo} alt="logo_koala"
        />
        <Nav.Link to='' as={NavLink} >
          Meeting Point
        </NavLink>
        <Nav.Link to='' as={NavLink} >
          Phone Contacts
        </NavLink>
        <Nav.Link to='' as={NavLink} >
          Map
        </NavLink>
      </Nav>

      <div className="NavBar--login">
        <span>Login/Logout</span>
      </div>

    </div>
  )
}