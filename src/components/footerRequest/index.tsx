/* ---------------------------------- Style --------------------------------- */
import ICONS from "../../assets/icons/icons";
import "./style.scss";

const FooterRequest: React.FC = () => {
  return (
    <footer className="footerRequest">
      <div className="footerRequest__content">
        <div className="footerRequest__leftBlock">
          <h1>TEONICA</h1>
          <ICONS.square />
        </div>
        <div className="footerRequest__rightBlock">
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Case Studies</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterRequest;
