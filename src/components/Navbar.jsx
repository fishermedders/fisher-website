import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-container">
          <div className="nav-brand">
            <span>
              <b>fm</b>
            </span>
            <span className="separator">|</span>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/fisher">fisher</Link>
            </li>
            <li>
              <Link to="/music">music</Link>
            </li>
            <li>
              <Link to="/movies">movies</Link>
            </li>
            <li>
              <Link to="/television">television</Link>
            </li>
            <li>
              <Link to="/site">site</Link>
            </li>
            <li>
              <Link to="/posts">posts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
