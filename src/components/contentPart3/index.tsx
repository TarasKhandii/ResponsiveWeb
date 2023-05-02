/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import BlackDot from "../../assets/images/blackDot.png";
/* ---------------------------------- Types --------------------------------- */
import { ContentPart3Props } from "./types";
/* -------------------------------- Component ------------------------------- */
import TextComponent from "../textComponent";
import ICONS from "../../assets/icons/icons";

const ContentPart3: React.FC<ContentPart3Props> = ({
  title,
  listTitleFirst,
  listDescriptionFirst,
  listTitleSecond,
  listDescriptionSecond,
  listTitleThird,
  listDescriptionThird,
  listTitleFFourth,
  listDescriptionFourth,
  listTitleFifth,
  listDescriptionFifth,
  firstImg,
  secondImg,
}) => {
  return (
    <div className="contentPart3">
      <div className="contentPart3__blackLine">
        <ICONS.blackLine />
      </div>
      <h3 className="contentPart3__title">{title}</h3>
      <div className="contentPart3__blockFirst">
        <div className="contentPart3__blockFirstContent">
          <TextComponent
            title={listTitleFirst}
            subtitle={listDescriptionFirst}
          />
          <TextComponent
            title={listTitleSecond}
            subtitle={listDescriptionSecond}
          />
          <TextComponent
            title={listTitleThird}
            subtitle={listDescriptionThird}
          />
        </div>
        <img
          src={firstImg}
          alt="firstImg"
          className="contentPart3__imgBlockImg"
        />
        <div className="contentPart3__imgBlock">
          <img
            src={BlackDot}
            alt="blackDot"
            className="contentPart3__imgBlockBackground"
          />
        </div>
      </div>
      <div className="contentPart3__blockSecond">
        <img
          src={secondImg}
          alt="secondImg"
          className="contentPart3__blockSecondImg"
        />
        <div className="contentPart3__blockSecondImgBack">
          <img src={BlackDot} alt="blackDot" className="contentPart3__block" />
        </div>
        <div className="contentPart3__blockSecondContent">
          <TextComponent
            title={listTitleFFourth}
            subtitle={listDescriptionFourth}
          />
          <TextComponent
            title={listTitleFifth}
            subtitle={listDescriptionFifth}
          />
        </div>
      </div>
    </div>
  );
};
export default ContentPart3;
