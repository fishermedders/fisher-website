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
            <a href="/">home</a>
          </li>
          <li>
            <a href="/fisher">fisher</a>
          </li>
          <li>
            <a href="/music">music</a>
          </li>
          <li>
            <a href="/movies">movies</a>
          </li>
          <li>
            <a href="/site">site</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
