/* ---------------------------------- Types --------------------------------- */
import { ContentPart2Props } from "./types";
/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import BlackDot from "../../assets/images/blackDot.png";
import ICONS from "../../assets/icons/icons";

const ContentPart2: React.FC<ContentPart2Props> = ({
  title,
  image,
  liTitle,
  li1,
  li2,
  li3,
  li4,
  li5,
  lastTitle,
}) => {
  return (
    <div className="contentPart2">
      <div className="contentPart2__blackLine">
        <ICONS.blackLine />
      </div>
      <h3 className="contentPart2__title">{title}</h3>
      <div className="contentPart2__serviceBlock">
        <div className="contentPart2__serviceBlockList">
          <h2>{liTitle}</h2>
          <ul>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
            <li>{li5}</li>
          </ul>
        </div>
        <img src={image} alt="firstImg" className="contentPart2__imgBlockImg" />
        <div className="contentPart2__imgBlock">
          <img
            src={BlackDot}
            alt="blackDot"
            className="contentPart2__imgBlockBackground"
          />
        </div>
      </div>
      <div className="contentPart2__lastBlock">
        <ICONS.blackLine />
        <h3>{lastTitle}</h3>
      </div>
    </div>
  );
};
export default ContentPart2;
