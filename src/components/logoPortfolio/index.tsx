/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import Logo from "../../assets/images/group76.png";

interface LogoPortfolioProps {
  background: string;
}

const LogoPortfolio: React.FC<LogoPortfolioProps> = ({ background }) => {
  return (
    <div className="logoPortfolio">
      <div
        style={{ background: background }}
        className="logoPortfolio__container"
      >
        <h1>Logo</h1>
        <img src={Logo} alt="Logo" className="logoPortfolio__img" />
      </div>
      <div className="logoPortfolio__brand">
        <h2>Brand name</h2>
        <p>Name of product developed</p>
      </div>
    </div>
  );
};

export default LogoPortfolio;
