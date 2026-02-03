import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar" aria-label="Main navigation">
        <ul>
          <li>
            <span>
              <b>fm</b>
            </span>
          </li>
          <li>|</li>
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
        </ul>
      </nav>
    </header>
  );
}
