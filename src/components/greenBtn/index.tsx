// style
import ICONS from "../../assets/icons/icons";
import "./style.scss";
interface GreenBtnProps {
  onClick?: () => void;
  title: string;
  height?: string;
}

const GreenBtn: React.FC<GreenBtnProps> = ({ onClick, title, height }) => {
  return (
    <button
      style={{ height: height }}
      className="greenBtn"
      type="submit"
      onClick={onClick}
    >
      {title}
      <div>
        <ICONS.arrow />
      </div>
    </button>
  );
};

export default GreenBtn;
