import { Link } from "react-router-dom";
import "./Breadscrumb.scss";

const Breadscrumb = ({ pageName }) => {
  return (
    <div className="breadscrumb">
      <div className="bread-heading">{pageName}</div>
      <div>
        <Link to={"/"} className="active-link">
          Home &gt;{" "}
        </Link>
        <Link className="link">{pageName}</Link>
      </div>
    </div>
  );
};

export default Breadscrumb;
