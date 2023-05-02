// Style
import BlackBtn from "../blackBtn";
import LogoPortfolio from "../logoPortfolio";
import "./style.scss";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio__title">Portfolio</h1>
      <div className="portfolio__block">
        <LogoPortfolio background="linear-gradient(114.02deg, #DCDDDF 0%, #B4B5BA 100%" />
        <LogoPortfolio background="linear-gradient(114.02deg, #efe9dd 0%, #dbc9b1 100%" />
      </div>
      <div style={{ marginBottom: "100px" }}>
        <BlackBtn title="All works" />
      </div>
    </div>
  );
};

export default Portfolio;
