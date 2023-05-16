/* ---------------------------------- Style --------------------------------- */
import ICONS from "../../assets/icons/icons";
import "./style.scss";

interface TextHomeComponentProps {
  prevTitle: string;
  title: string;
  description: string;
}

const TextHomeComponent: React.FC<TextHomeComponentProps> = ({
  prevTitle,
  title,
  description,
}) => {
  return (
    <div className="textHomeCompt">
      <div className="textHomeCompt__prevTitle">
        <ICONS.greenLine />
        <p>{prevTitle}</p>
      </div>
      <div className="textHomeCompt__title">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TextHomeComponent;
