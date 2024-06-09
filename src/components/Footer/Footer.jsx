import "./Footer.scss";
import uvIcon from "../../assets/images/icons/uv.svg";
import umbrellaImage from "../../assets/images/pictures/umbrella.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__text">
          TanO'Clock combines your personalized skin tone with current UV
          information to recommend safe sun exposure times.
        </p>
        <br />
        <p className="footer__text footer__text--bold">
          If you are going to lay out in the sun, it's best to do it responsibly!
        </p>
      </div>
      <div className="footer__background"></div>
    </footer>
  );
}

export default Footer;
