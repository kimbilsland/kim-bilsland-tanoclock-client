import "./Navbar.scss";
import navIcon from "../../assets/images/icons/menu.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="navbar__logo">TanO'Clock</h2>
      </Link>
      <img className="navbar__icon" src={navIcon} alt="navigation" />
    </div>
  );
}

export default Nav;

