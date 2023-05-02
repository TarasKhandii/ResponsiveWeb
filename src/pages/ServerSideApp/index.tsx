/* ---------------------------------- Component --------------------------------- */
import Footer from "../../components/footer";
import Header from "../../components/headers";
import IntroPart from "../../components/introPart";
import Portfolio from "../../components/portfolio";
import StackComponent from "../../components/stackComponent";
import ContentPart3 from "../../components/contentPart3";
/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import LaptopImg from "../../assets/images/serverPage1.png";
import FirstImg from "../../assets/images/serverPage2.png";
import SecondImg from "../../assets/images/serverPage3.png";

const ServerSideAppPage: React.FC = () => {
  return (
    <div className="ServerSideAppPage">
      <Header />
      <IntroPart title="Server-side applications" img={LaptopImg} />
      <ContentPart3
        title="We empower web and mobile applications with robust Node.js backends based on microservices to build a product that works seamlessly, meets market needs and creates an enjoyable user experience."
        listTitleFirst="Define achitecture"
        listDescriptionFirst="We are ready to tackle all frontend challenges. We have developed information-rich dashboards, visualized data on real-time graphs and created few HTML games."
        listTitleSecond="Application security"
        listDescriptionSecond="After including to web app ability to work offline, push notifications and device hardware access, we make user experience similar to using native mobile and desktop apps"
        listTitleThird="Data transfering"
        listDescriptionThird="We can integrate third-party services to your application to make it more valuable for the final users. Before using any of the services we check the reliability and security of it."
        listTitleFFourth="Server configuration"
        listDescriptionFourth="It doesn't matter where final users launch the application and which browser they use. We make applications look great either on big TV and iMac or small mobile screens."
        listTitleFifth="GDPR compliance"
        listDescriptionFifth="To achieve the fastest interaction between the user and the system we use best practices for code architecture, optimize content, manage caching and connect CDN."
        firstImg={FirstImg}
        secondImg={SecondImg}
      />
      <StackComponent />
      <Portfolio />
      <Footer />
    </div>
  );
};
export default ServerSideAppPage;
