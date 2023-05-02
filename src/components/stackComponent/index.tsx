/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import ICONS from "../../assets/icons/icons";
import NodeImg from "../../assets/images/nodeImg.png";
import ReactImg from "../../assets/images/reactImg.png";

const StackComponent: React.FC = () => {
  return (
    <div className="stackComponent">
      <ICONS.whiteLine />
      <h1>
        We develop mobile user <br />
        interfaces with
      </h1>
      <div>
        <img src={NodeImg} alt="nodeImg" />
        <img src={ReactImg} alt="reactImg" />
        <img src={NodeImg} alt="nodeImg" />
        <img src={ReactImg} alt="reactImg" />
        <img src={ReactImg} alt="reactImg" />
      </div>
    </div>
  );
};
export default StackComponent;
