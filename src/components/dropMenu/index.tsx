/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
/* -------------------------------- Libraries ------------------------------- */
import clsx from "clsx";
import { useCallback, useState } from "react";
import ICONS from "../../assets/icons/icons";
import { Link } from "react-router-dom";

interface DropMenuProps {
  type: boolean;
}

const servicesArr = [
  { title: "JS engineers", link: "/" },
  { title: "Product development", link: "/product" },
  { title: "IT Staff", link: "/itstaff" },
];
const solutionsArr = [
  { title: "Web application", link: "/web" },
  { title: "Mobile application", link: "/mobile" },
  { title: "Server-side application", link: "/server" },
];

const DropMenu: React.FC<DropMenuProps> = ({ type }) => {
  const [open, setOpen] = useState(false);

  const openFunc = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return type ? (
    <div className={clsx("dropMenu", open && "dropMenuOpen")}>
      <div onClick={() => openFunc()} className="dropMenu__title">
        <p>Services</p>
        <ICONS.arrowHeader />
      </div>
      <ul>
        {servicesArr.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className={clsx("dropMenu", open && "dropMenuOpen")}>
      <div onClick={() => openFunc()} className="dropMenu__title">
        <p>Solutions</p>
        <ICONS.arrowHeader />
      </div>
      <ul>
        {solutionsArr.map((item, index) => {
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
