import "./style.css";
import { Link } from "react-router-dom";
export default function SubmitBtn({ path="", name, onclick }) {
  return (
    //creator : nehorai, team f , enter the path with / and enter the function without () 
    <div className="submit">
      <Link to={path}>
        <div type="button" onClick={(event) => onclick(event)}>
          <div className="word">{name}</div>
        </div>
      </Link>
    </div>
  );
}
