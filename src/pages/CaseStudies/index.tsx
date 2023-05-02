/* ---------------------------------- Component --------------------------------- */
import Footer from "../../components/footer";
import Header from "../../components/headers";
import IntroPart from "../../components/introPart";
import Texhnology from "../../components/texhnology";
/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import FirstImg from "../../assets/images/caseStudies1.png";
import SecondImg from "../../assets/images/caseStudies2.png";
import Spider from "../../assets/images/spider.png";
import Motivato from "../../assets/images/motivato.png";

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="caseStudies">
      <Header />
      <IntroPart title="Case Studies" btn={false} />
      <div className="caseStudies__spiderBlock">
        <div className="caseStudies__spiderBlockContent">
          <img src={Spider} alt="spider" />
          <h2>Case name</h2>
          <span>
            Looking for a team to build web or mobile application based on your
            ideas and experience? Hire a remote team of software and product
            development experts to build the application for you.
          </span>
          <Texhnology />
        </div>
        <img
          className=" caseStudies__spiderBlockImg"
          src={FirstImg}
          alt="caseImg"
        />
      </div>
      <div className="caseStudies__motivatoBlock">
        <img
          className=" caseStudies__motivatoBlockImg"
          src={SecondImg}
          alt="caseImg"
        />
        <div className="caseStudies__motivatoBlockContent">
          <img src={Motivato} alt="Motivato" />
          <h2>Case name</h2>
          <span>
            Looking for a team to build web or mobile application based on your
            ideas and experience? Hire a remote team of software and product
            development experts to build the application for you.
          </span>
          <Texhnology />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CaseStudiesPage;
