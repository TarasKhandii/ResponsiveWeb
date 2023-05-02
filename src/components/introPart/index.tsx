/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import ICONS from "../../assets/icons/icons";
import DotImg from "../../assets/images/group68.png";
/* -------------------------------- Component ------------------------------- */
import GreenBtn from "../greenBtn";
/* -------------------------------- Libraries ------------------------------- */
import clsx from "clsx";
import { Link } from "react-router-dom";
/* --------------------------------- Routes--------------------------------- */
import { ROUTES } from "../../router/routes";

interface IntroPartProps {
  title?: string;
  img?: string;
  btn?: boolean;
  subtitle?: string;
  imgStyle?: boolean;
  arrow?: boolean;
}

const IntroPart: React.FC<IntroPartProps> = ({
  title,
  img,
  btn = true,
  subtitle,
  imgStyle = false,
  arrow = true,
}) => {
  return (
    <div className="introPart">
      <div className="introPart__block">
        <div className="introPart__blockLeft">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {btn && (
            <Link style={{ textDecoration: "none" }} to={ROUTES.requestPage}>
              <GreenBtn title="Request a quote" />
            </Link>
          )}
          {arrow && (
            <div className="introPart__blockLeftArrowDown">
              <ICONS.arrowDown />
            </div>
          )}
        </div>
        <div className="introPart__blockRight">
          <img
            className="introPart__blockRightBackgroundImg"
            src={DotImg}
            alt="dotImg"
          />
          {img && (
            <img
              className={clsx(
                "introPart__blockRightImg",
                imgStyle && "introPart__blockRightImgMain"
              )}
              src={img}
              alt="Laptop"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroPart;
