/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import BlackDot from "../../assets/images/blackDot.png";
import ManFirst from "../../assets/images/homePageImg/man1.png";
import ManSecond from "../../assets/images/homePageImg/man2.png";
import TextComponent from "../textComponent";

const WorkWithUs: React.FC = () => {
  return (
    <div className="workWithUs">
      <h5>Why to work with us?</h5>
      <div className="workWithUs__content">
        <div className="workWithUs__imgBlock">
          <img src={BlackDot} alt="backgroundDot" />
          <img
            className="workWithUs__imgBlockFirst"
            src={ManFirst}
            alt="backgroundDot"
          />
          <img
            className="workWithUs__imgBlockSecond"
            src={ManSecond}
            alt="backgroundDot"
          />
        </div>
        <div className="workWithUs__textBlock">
          <TextComponent
            title="Transparent process"
            subtitle="Our development process is clear. We provide our clients with access to management system where they can on which tasks we are working. Also, our team is available online every day on preferable messengers."
          />

          <TextComponent
            title="High quality of deliverables"
            subtitle="We use cutting-edge technologies and set up continuous integration and delivery processes to deliver reliable software with great performance. Before final deployment our code goes through a number of tests."
          />
          <TextComponent
            title="Business focused mindset"
            subtitle="We strive to provide our clients with value that will make their business successful. We don’t blindly follow the clients requirements, our goal is to solve real problems through excellent comunications."
          />
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
