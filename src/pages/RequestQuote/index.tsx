/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
/* -------------------------------- Component ------------------------------- */
import Header from "../../components/headers";
import FooterRequest from "../../components/footerRequest";
import IntroRequest from "../../components/introRequest";

const RequestQuote: React.FC = () => {
  return (
    <div className="requestQuote">
      <Header />
      <IntroRequest
        title={`Request a quote`}
        subtitle="Assembly works closely with you to develop custom pricing models which factor in your industry, risk profile, and transactional volume."
      />
      <FooterRequest />
    </div>
  );
};

export default RequestQuote;
