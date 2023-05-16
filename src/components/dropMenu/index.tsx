/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import ICONS from "../../assets/icons/icons";
/* -------------------------------- Libraries ------------------------------- */
import clsx from "clsx";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
/* ---------------------------------- Types --------------------------------- */
import { IDropMenu } from "./types";

interface DropMenuProps {
  dropList: Array<IDropMenu>;
}

const DropMenu: React.FC<DropMenuProps> = ({ dropList }) => {
  const [open, setOpen] = useState(false);

  const openFunc = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className={clsx("dropMenu", open && "dropMenuOpen")}>
      <div onClick={() => openFunc()} className="dropMenu__title">
        <p>Services</p>
        <ICONS.arrowHeader />
      </div>
      <ul>
        {dropList.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropMenu;
