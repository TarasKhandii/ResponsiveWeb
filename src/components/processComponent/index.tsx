/* ---------------------------------- Style --------------------------------- */
import clsx from "clsx";
import { useCallback, useState } from "react";
import ICONS from "../../assets/icons/icons";
import "./style.scss";
import { IProcessList, ProcessListFirst, ProcessListSecond } from "./types";

interface ProcessComponentProps {
  typeProcess: boolean;
}

const ProcessComponent: React.FC<ProcessComponentProps> = ({ typeProcess }) => {
  const [active, setActive] = useState<{ item: IProcessList; index: Number }>({
    item: typeProcess ? ProcessListFirst[0] : ProcessListSecond[0],
    index: 0,
  });

  const clickFunc = useCallback((item: IProcessList, index: number) => {
    setActive({ item, index });
  }, []);

  return (
    <div className="processComponent">
      <ICONS.whiteLine />
      <h4>Process</h4>
      {typeProcess ? (
        <>
          <div className="processComponent__content">
            {ProcessListFirst.map((item, index) => {
              return (
                <div
                  className={clsx(
                    "processComponent__contentBlock",
                    active.index === index &&
                      "processComponent__contentBlockActive"
                  )}
                  onClick={() => {
                    console.log(index);
                    clickFunc(item, index);
                  }}
                >
                  {item.svg}
                  <h5>{item.title}</h5>
                  <div className="processComponent__contentLine"></div>
                </div>
              );
            })}
          </div>
          <p className=" text">{active.item.description}</p>
        </>
      ) : (
        <>
          <div className="processComponent__content">
            {ProcessListSecond.map((item, index) => {
              return (
                <div
                  className={clsx(
                    "processComponent__contentBlock",
                    active.index === index &&
                      "processComponent__contentBlockActive"
                  )}
                  onClick={() => {
                    console.log(index);
                    clickFunc(item, index);
                  }}
                >
                  {item.svg}
                  <h5>{item.title}</h5>
                  <div className="processComponent__contentLine"></div>
                </div>
              );
            })}
          </div>
          <p className=" text">{active.item.description}</p>
        </>
      )}
    </div>
  );
};

export default ProcessComponent;
