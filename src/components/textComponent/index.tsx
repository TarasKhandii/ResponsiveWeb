import ICONS from "../../assets/icons/icons";
import "./style.scss";
interface TextComponentProps {
  title: string;
  subtitle: string;
}

const TextComponent: React.FC<TextComponentProps> = ({ title, subtitle }) => {
  return (
    <div className="textComponent">
      <ICONS.checkMark />
      <div className="textComponent__block">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
export default TextComponent;
