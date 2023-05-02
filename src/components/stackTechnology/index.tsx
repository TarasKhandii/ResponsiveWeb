/* ---------------------------------- Style --------------------------------- */
import "./style.scss";
import MongoSmall from "../../assets/images/homePageImg/mongoDBSmall.png";
import AwsSmall from "../../assets/images/homePageImg/awsSmall.png";
import AwsBig from "../../assets/images/homePageImg/awsBig.png";
import ReactSmall from "../../assets/images/homePageImg/reactSmall.png";
import ReactBig from "../../assets/images/homePageImg/reactBig.png";
import Node from "../../assets/images/homePageImg/node.png";
import MongoDBMedium from "../../assets/images/homePageImg/mongoDBMedium.png";
import MongoDBBig from "../../assets/images/homePageImg/mongoDBBig.png";

const StackTechnology: React.FC = () => {
  return (
    <div className="stackTechnology">
      <div className="stackTechnology__textBlock">
        <h5 className="stackTechnology__textBlockTitle">
          We make your products <br />
          great with
        </h5>
        <p className="stackTechnology__textBlockSub">
          Additionally, we build software using:
        </p>
        <p className="stackTechnology__textBlockDesc">
          ES6, Redux, Redis, Express, Typescript, Microservices, ArangoDB,
          RabbitMQ,
          <br /> Selenium, Chai.js, Cucumber, Ansible, Consul, Gitlab, Gitlab
          CI, Flow Type.
        </p>
      </div>
      <img
        className="stackTechnology__mongoDBSmall"
        src={MongoSmall}
        alt="mongoDBSmall"
      />
      <img
        className="stackTechnology__awsSmall"
        src={AwsSmall}
        alt="awsSmall"
      />
      <img className="stackTechnology__awsBig" src={AwsBig} alt="awsBig" />
      <img
        className="stackTechnology__reactSmall"
        src={ReactSmall}
        alt="reactSmall"
      />
      <img className="stackTechnology__node" src={Node} alt="node" />
      <img
        className="stackTechnology__awsSmall2"
        src={AwsSmall}
        alt="awsSmall2"
      />
      <img
        className="stackTechnology__reactBig"
        src={ReactBig}
        alt="reactBig"
      />
      <img
        className="stackTechnology__reactSmall2"
        src={ReactSmall}
        alt="reactSmall2"
      />
      <img
        className="stackTechnology__mongoDBMedium"
        src={MongoDBMedium}
        alt="mongoDBMedium"
      />
      <img
        className="stackTechnology__mongoDBMedium2"
        src={MongoDBMedium}
        alt="mongoDBMedium2"
      />
      <img
        className="stackTechnology__mongoDBBig"
        src={MongoDBBig}
        alt="mongoDBBig"
      />
    </div>
  );
};

export default StackTechnology;
