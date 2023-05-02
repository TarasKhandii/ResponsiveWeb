/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import BlackDot from "../../assets/images/blackDot.png";
import FirstImg from "../../assets/images/homePageImg/homeImg1.png";
import SecondImg from "../../assets/images/homePageImg/homeImg2.png";
/* -------------------------------- Component ------------------------------- */
import TextHomeComponent from "../textHomeComponent";
import ICONS from "../../assets/icons/icons";

const ContentPart: React.FC = ({}) => {
  return (
    <div className="contentPart">
      <div className="contentPart__blackLine">
        <ICONS.blackLine />
      </div>
      <h3 className="contentPart__title">How we help?</h3>
      <div className="contentPart__blockUpper">
        <div className="contentPart__blockUpperImgBack">
          <img src={BlackDot} alt="blackDot" className="contentPart__block" />
        </div>
        <img
          src={FirstImg}
          alt="firstImg"
          className="contentPart__blockUpperImg"
        />
        <div className="contentPart__blockUpperContent">
          <TextHomeComponent
            prevTitle="Product development outsourcing"
            title="Turn your vision into working product with our remote team"
            description="Looking for a team to build web or mobile application based on your ideas and experience? Hire a remote team of software and product development experts to build the application for you."
          />
        </div>
      </div>

      <div className="contentPart__blockLower">
        <div className="contentPart__blockLowerContent">
          <TextHomeComponent
            prevTitle="IT staff augmentation"
            title="Strenghten your team with experienced JavaScript developers"
            description="Need to scale up your team and expand JavaScript expertise? Can’t find the right IT expert? Our frontend and backend developers can join your team today!"
          />
        </div>
        <div className="contentPart__imgBlock">
          <img
            src={SecondImg}
            alt="secondImg"
            className="contentPart__imgBlockImg"
          />
          <img
            src={BlackDot}
            alt="blackDot"
            className="contentPart__imgBlockBackground"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentPart;
