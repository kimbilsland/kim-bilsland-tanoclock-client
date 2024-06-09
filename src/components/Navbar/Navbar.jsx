import "./Navbar.scss";
import navIcon from "../../assets/images/icons/menu.svg";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg"; 

function Nav() {
  return (
    <div className="navbar">
      <Link to="/">
        {/* <img className="navbar__logo" src={logo} alt="TanO'Clock-logo"/> */}
        <h2 className="navbar__logo">TanO'Clock</h2>
      </Link>
      <img className="navbar__icon" src={navIcon} alt="navigation" />
    </div>
  );
}

export default Nav;

