/* ---------------------------------- Component --------------------------------- */
import Footer from "../../components/footer";
import Header from "../../components/headers";
import IntroPart from "../../components/introPart";
import Portfolio from "../../components/portfolio";
import ProcessComponent from "../../components/processComponent";
import ContentPart2 from "../../components/contentPart2";
/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import Laptop from "../../assets/images/laptop.png";
import ProductImg from "../../assets/images/productPageImg.png";

const ProductDevelopment: React.FC = () => {
  return (
    <div className="productDevelopment">
      <Header />
      <IntroPart title="Product development outsourcing" img={Laptop} />
      <ContentPart2
        title="Build your digital products remotely"
        liTitle="This service would be a great fit in case you:"
        li1="Don’t have enough time or motivation to build an in-house team"
        li2="Can’t find the right people to help you build an app"
        li3="Have no experience in building applications"
        li4="Need redeveloping the existing product with best practices"
        li5="Want to validate your product idea quickly"
        lastTitle="Our remote team will take care of building highly scalable web, mobile, and server-side applications when you will be caring about the business side."
        image={ProductImg}
      />
      <ProcessComponent typeProcess={true} />
      <Portfolio />
      <Footer />
    </div>
  );
};
export default ProductDevelopment;
