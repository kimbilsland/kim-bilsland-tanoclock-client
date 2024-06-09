import "./Navbar.scss";
import navIcon from "../../assets/images/icons/menu.svg";

function Nav() {
  return (
    <div className="navbar">
      <h1 className="navbar__logo">TanO'Clock</h1>
      <img src={navIcon} alt="navigation" />
    </div>
  );
}

export default Nav;
