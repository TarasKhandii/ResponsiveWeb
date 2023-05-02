/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import DotImg from "../../assets/images/group68.png";
/* -------------------------------- Component ------------------------------- */
import RequestForm from "../requestFrom";

interface IntroRequestProps {
  title?: string;
  subtitle?: string;
}

const IntroRequest: React.FC<IntroRequestProps> = ({ title, subtitle }) => {
  return (
    <div className="introRequest">
      <div className="introRequest__block">
        <div className="introRequest__blockLeft">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="introRequest__blockRight">
          <div className="introRequest__blockRightForm">
            <RequestForm />
          </div>
          <img
            className="introRequest__blockRightBackgroundImg"
            src={DotImg}
            alt="dotImg"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroRequest;
