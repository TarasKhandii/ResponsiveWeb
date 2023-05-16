/* ---------------------------------- Component --------------------------------- */
import Footer from "../../components/footer";
import Header from "../../components/headers";
import IntroPart from "../../components/introPart";
import Portfolio from "../../components/portfolio";
import ProcessComponent from "../../components/processComponent";
import ContentPart2 from "../../components/contentPart2";
/* ---------------------------------- Types --------------------------------- */
import { ProcessListSecond } from "../../components/processComponent/types";
/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import Staff from "../../assets/images/ITStaff.png";
import Hands from "../../assets/images/hands.png";

const ITStaff: React.FC = () => {
  return (
    <div className="ITStaff">
      <Header />
      <IntroPart title="IT staff augmentation" img={Staff} />
      <ContentPart2
        title="Scale up your development team"
        liTitle="This service would be a great fit in case you:"
        li1="Don’t have enough time for building an in-house team"
        li2="Cannot find experienced developers to expand team expertise"
        li3="Want to scale up your team for a temporary period"
        li4="Need to hire JavaScript developers fastly"
        li5="Can’t afford in-house developers locally"
        lastTitle="Scale fast with our frontend and backend JavaScript engineers. Or hire our top-notch experts to manage and boost the development."
        image={Hands}
      />
      <ProcessComponent typeProcess={false} processList={ProcessListSecond} />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default ITStaff;
