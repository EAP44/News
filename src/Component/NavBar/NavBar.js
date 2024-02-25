import { useState } from "react";
import { logo } from "../../Utils/Image";
import "./StyleNavBar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SwitchCountry } from "../../Redux/Action";
function NavBar() {
  const countrys = ['United States of America','Morocco','Japan','France','Denmark','Canada',]
  const [selected,setselected] = useState()
  const dispatch = useDispatch()
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
          <Link to="/News">News</Link>
        </li>
        <li className="Nav-li">
          <Link to="/Sport">Sport</Link>
        </li>
        <li className="Nav-li">
          <Link to="/Earth">Earth</Link>
        </li>
        <li className="Nav-li">
          <Link to="/Travel">Travel</Link>
        </li>
        <li className="Nav-li">
          <Link to="/Economie">Economie</Link>
        </li>
      </ul>
      <select class="Nav-serch" value={selected} onChange={(e)=>{setselected(e.target.value);dispatch(SwitchCountry(selected))}}>
        <option>select your country</option>
        {countrys.map((country)=>{
          return <option>{country}</option>
        })}
      </select>
    </nav>
  );
}
export default NavBar;
