import { logo } from "../../Utils/Image";
import "./StyleNavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="Nav">
      <span className="Nav-logo">
        <img src={logo} alt="icon-logo" title="News" height={80} />
      </span>
      <ul className="Nav-ul">
        <li className="Nav-li">
          <Link to="/">Home</Link>
        </li>
        <li className="Nav-li">
          <Link to="/">News</Link>
        </li>
        <li className="Nav-li">
          <Link to="/">Sport</Link>
        </li>
        <li className="Nav-li">
          <Link to="/">Earth</Link>
        </li>
        <li className="Nav-li">
          <Link to="/">Travel</Link>
        </li>
        <li className="Nav-li">
          <Link to="/">economie</Link>
        </li>
      </ul>
      <span class="Nav-serch">
        <input type="text" placeholder="Search..." />
      </span>
    </nav>
  );
}
export default NavBar;
