import "./Navbar.scss";
import navIcon from "../../assets/images/icons/menu.svg";

function Nav() {
  return (
    <div className="navbar">
      <h2 className="navbar__logo">TanO'Clock</h2>
      <img src={navIcon} alt="navigation" />
    </div>
  );
}

export default Nav;
