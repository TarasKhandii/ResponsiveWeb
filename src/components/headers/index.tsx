/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
/* -------------------------------- Libraries ------------------------------- */
import { Link } from "react-router-dom";
/* ---------------------------------- Route --------------------------------- */
import { ROUTES } from "../../router/routes";
/* -------------------------------- Component ------------------------------- */
import DropMenu from "../dropMenu";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to={ROUTES.home}>
          <h1>TEONICA</h1>
        </Link>
      </div>

      <input type="checkbox" className="input" id="burgerMenu" />
      <nav className="navHeader">
        <div className="header__leftBlock">
          <DropMenu type={true} />
          <DropMenu type={false} />
          <Link to={ROUTES.casePage}>Case Studies</Link>
        </div>
        <div className="header__rightBlock">
          <Link to={ROUTES.requestPage}>Request a quote</Link>
        </div>
      </nav>
      <label className="burgerButton" htmlFor="burgerMenu">
        <div className="burgerLine"></div>
        <div className="burgerLine"></div>
        <div className="burgerLine"></div>
      </label>
    </header>
  );
};

export default Header;
