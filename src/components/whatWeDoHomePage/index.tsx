/* ---------------------------------- Style --------------------------------- */
import ICONS from "../../assets/icons/icons";
import "./style.scss";
/* -------------------------------- Component ------------------------------- */
import GreenBtn from "../greenBtn";

const WhatWeDoHomePage: React.FC = () => {
  return (
    <div className="whatWeDo">
      <ICONS.whiteLine />
      <h4>What we do?</h4>
      <div className="whatWeDo__block">
        <div className="whatWeDo__blockContent">
          <h5>
            Web <br /> Applications
          </h5>
          <p>
            We create highly scalable platforms and well-tested products with
            frontend that makes a great impression on users across all devices.
          </p>
          <div className="whatWeDo__blockBackground">
            <ICONS.computer />
          </div>
        </div>
        <div className="whatWeDo__blockContent">
          <h5>
            Mobile <br /> Applications
          </h5>
          <p>
            Hybrid Android and iOS mobile applications build with React Native
            based on the robust Node.js backend will satisfy every end user.
          </p>
          <div className="whatWeDo__blockBackground">
            <ICONS.mobile />
          </div>
        </div>
        <div className="whatWeDo__blockContent">
          <h5>
            Sever-side <br /> Applications
          </h5>
          <p>
            We build complex, highly scalable server-side solutions with Node.js
            backend based on microservices for each application we create.
          </p>
          <div className="whatWeDo__blockBackground">
            <ICONS.server />
          </div>
        </div>
      </div>
      <div className="whatWeDo__blockBtn">
        <GreenBtn title="Our Services" height="74px" />
      </div>
    </div>
  );
};

export default WhatWeDoHomePage;
