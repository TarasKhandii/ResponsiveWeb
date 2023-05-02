/* ---------------------------------- Component --------------------------------- */
import Footer from "../../components/footer";
import Header from "../../components/headers";
import IntroPart from "../../components/introPart";
import Portfolio from "../../components/portfolio";
/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import MainImg from "../../assets/images/homePageImg/mainImg.png";
import ContentPart from "../../components/contentPart";
import WhatWeDoHomePage from "../../components/whatWeDoHomePage";
import StackTechnology from "../../components/stackTechnology";
import WorkWithUs from "../../components/workWithUs";

const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <Header />
      <IntroPart
        title="JavaScript engineers"
        subtitle="Ready to develop your product and join your team remotely"
        img={MainImg}
        imgStyle={true}
      />
      <ContentPart />
      <WhatWeDoHomePage />
      <StackTechnology />
      <WorkWithUs />
      <div className="homePage__someBlock">
        <h6>
          “Most of all, I liked their approach—they helped me
          <br /> to focus on the true needs of the business.”
        </h6>
        <div className="homePage__content">
          <div className="homePage__contentCircle"></div>
          <div>
            <p className="homePage__contentTitle">Name Surname</p>
            <p className="homePage__contentTitleSub">Title Company</p>
          </div>
        </div>
      </div>
      <div className="homePage__background">
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
