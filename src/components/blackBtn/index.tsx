/* ---------------------------------- Style --------------------------------- */
import ICONS from "../../assets/icons/icons";
import "./style.scss";
interface BtnProps {
  title: string;
  onClick?: () => void;
  width?: string;
}

const BlackBtn: React.FC<BtnProps> = ({ title, onClick, width }) => {
  return (
    <button
      className="blackBtn"
      style={{ width: width }}
      type="submit"
      onClick={onClick}
    >
      {title}
      <ICONS.arrow />
    </button>
  );
};

export default BlackBtn;
