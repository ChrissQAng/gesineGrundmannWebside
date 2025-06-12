import { Link } from "react-router-dom";
import "./Texts.css";
import BackArrow from "../../components/Backarrow/Backarrow";

const Texts = () => {
  return (
    <div className="texts-wrapper">
      <BackArrow />
      <h2>texts</h2>
      <div className="texts-links">
        <Link to="/uhr">
          Harald Uhr
          <br /> <span>GENUGGEKRIEGT</span>
        </Link>
        <Link to="/hirsch">
          Thomas Hirsch
          <br /> <span>In actual fact (likenesses)</span>
        </Link>
        <Link to="/aberle">
          Christian Aberle
          <br />
          <span>Handgeblasene Mundstücke</span>
        </Link>
        <Link to="/donauer">
          Carla Donauer
          <br /> <span>not one thing that you want is upstream</span>
        </Link>
        <Link to="/heym">
          Michael Heym
          <br /> <span>Das Unsichtbare im Blick</span>
        </Link>
      </div>
    </div>
  );
};

export default Texts;
