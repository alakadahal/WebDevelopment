import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
                <h6> by Alaka</h6>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorite</Link>
            </div>

        </nav>
    )
}
export default NavBar;  