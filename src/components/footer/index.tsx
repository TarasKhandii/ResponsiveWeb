/* ---------------------------------- Style --------------------------------- */
import ICONS from "../../assets/icons/icons";
import "./style.scss";
/* -------------------------------- Component ------------------------------- */
import ContactFrom from "../contactForm";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__leftBlock">
          <h1>TEONICA</h1>
          <p>
            Looking for a team to build web or mobile
            <br /> application based on your ideas and experience? <br />
            Hire a remote team of software and product <br />
            development experts to build the application for you.
          </p>
        </div>
        <div className="footer__rightBlock">
          <ICONS.square />
          <Link to={ROUTES.home}>Services</Link>
          <Link to={ROUTES.home}>About</Link>
          <Link to={ROUTES.casePage}>Case Studies</Link>
        </div>
      </div>
      <div className="footer__contactForm">
        <ContactFrom />
      </div>
    </footer>
  );
};

export default Footer;
