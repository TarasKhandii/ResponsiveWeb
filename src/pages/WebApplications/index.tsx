/* ---------------------------------- Component --------------------------------- */
import Footer from "../../components/footer";
import Header from "../../components/headers";
import IntroPart from "../../components/introPart";
import Portfolio from "../../components/portfolio";
import StackComponent from "../../components/stackComponent";
import ContentPart3 from "../../components/contentPart3";
/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import Laptop from "../../assets/images/laptop.png";
import ChartsImg from "../../assets/images/chartsImg.png";
import SecondImg from "../../assets/images/webAppImg.png";

const WebApplicationsPage: React.FC = () => {
  return (
    <div className="WebApplicationsPage">
      <Header />
      <IntroPart title="Web applications" img={Laptop} />
      <ContentPart3
        title="We create web apps of any complexity. Products we develop are highly scalable and well documented. We pay a lot of attention to pre-release testing. So all released web applications are of high quality."
        listTitleFirst="Complex user interfaces"
        listDescriptionFirst="We are ready to tackle all frontend challenges. We have developed
        information-rich dashboards, visualized data on real-time graphs and
        created few HTML games."
        listTitleSecond="Progressive web application "
        listDescriptionSecond="After including to web app ability to work offline, push notifications and device hardware access, we make user experience similar to using native mobile and desktop apps"
        listTitleThird="Third-party services"
        listDescriptionThird="We can integrate third-party services to your application to make it more valuable for the final users. Before using any of the services we check the reliability and security of it."
        listTitleFFourth="Cross-browser and responsive"
        listDescriptionFourth="It doesn't matter where final users launch the application and which browser they use. We make applications look great either on big TV and iMac or small mobile screens."
        listTitleFifth="Speed optimization"
        listDescriptionFifth="To achieve the fastest interaction between the user and the system we use best practices for code architecture, optimize content, manage caching and connect CDN."
        firstImg={ChartsImg}
        secondImg={SecondImg}
      />
      <StackComponent />
      <Portfolio />
      <Footer />
    </div>
  );
};
export default WebApplicationsPage;
