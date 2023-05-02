/* ---------------------------------- Component --------------------------------- */
import Footer from "../../components/footer";
import Header from "../../components/headers";
import IntroPart from "../../components/introPart";
import Portfolio from "../../components/portfolio";
import StackComponent from "../../components/stackComponent";
import ContentPart3 from "../../components/contentPart3";
/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import MobileImg from "../../assets/images/mobileAppImg.png";
import FirstImg from "../../assets/images/mobilePageFirst.png";
import SecondImg from "../../assets/images/mobilePageSecond.png";

const MobileApplicationsPage: React.FC = () => {
  return (
    <div className="MobileApplicationsPage">
      <Header />
      <IntroPart title="Mobile applications" img={MobileImg} />
      <ContentPart3
        title="Hybrid Android and iOS mobile applications build with React Native based on the robust Node.js backend will satisfy every end user."
        listTitleFirst="Mobile user interfaces"
        listDescriptionFirst="We can bring the functionality of your product into the mobile world. Our goal is to provide final users with the best experience while using your product on smartphones."
        listTitleSecond="Augmented reality "
        listDescriptionSecond="This technology expands the physical world, adding layers of digital information onto it. We add sounds, video, and graphics to the view of the existing environment with AR."
        listTitleThird="Third-party services"
        listDescriptionThird="We can integrate third-party services to your application to make it more valuable for the final users. Before using any of the services we check the reliability and security of it. "
        listTitleFFourth="Testing environment"
        listDescriptionFourth="To make app excellent across different smartphones we set up an environment that allows us to test it on different devices right after new code deployment."
        listTitleFifth="Publishing on stores"
        listDescriptionFifth="After finishing the development we can support you with verification and publishing developed applications on App Store and Google Play."
        firstImg={FirstImg}
        secondImg={SecondImg}
      />
      <StackComponent />
      <Portfolio />
      <Footer />
    </div>
  );
};
export default MobileApplicationsPage;
