import { logo } from "../Utils/Image";

function NavBar (){
    return(
        <nav className="bg-danger">
            <span>
                <img src={logo} alt="icon-logo" title="News" width={80} height={50} />
            </span>
            <ul className="Nav-ul">
                <li className="Nav-ul"></li>
                <li className="Nav-ul"></li>
                <li className="Nav-ul"></li>
                <li className="Nav-ul"></li>
                <li className="Nav-ul"></li>
            </ul>
            <span>

            </span>
        </nav>
    );
}
export default NavBar;