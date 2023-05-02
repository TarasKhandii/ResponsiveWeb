/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
/* -------------------------------- Component ------------------------------- */
import BlackBtn from "../blackBtn/index";

const RequestForm: React.FC = () => {
  return (
    <div className="requestForm">
      <div className="requestForm__inputBlock">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Service" />
        <input type="text" placeholder="Budget" />
      </div>
      <input
        type="text"
        placeholder="Your message"
        className="requestForm__inputMessage"
      />
      <p>
        By submitting this form you agree to our terms and conditions and our
        Privacy Policy which explains how we may collect, use and disclose your
        personal information including to third parties.
      </p>
      <BlackBtn title="Send" width="100%" />
    </div>
  );
};

export default RequestForm;
