// Style
import BlackBtn from "../blackBtn";
import "./style.scss";

const ContactFrom: React.FC = () => {
  return (
    <div className="contactFrom">
      <h1>Contact Form</h1>
      <p>Ready to turn your ideas a digital product</p>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="E-mail" />
      <div>
        <BlackBtn title="Send" />
      </div>
    </div>
  );
};

export default ContactFrom;
