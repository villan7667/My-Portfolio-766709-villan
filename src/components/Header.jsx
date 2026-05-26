import { useState, useEffect } from "react";

export default function Header({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const isLight = theme === "light_theme";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY >= 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNav = () => {
    setNavOpen(false);
    document.body.classList.remove("active");
  };

  const toggleNav = () => {
    setNavOpen((prev) => {
      const next = !prev;
      if (next) document.body.classList.add("active");
      else document.body.classList.remove("active");
      return next;
    });
  };

  return (
    <header className={`header${isScrolled ? " active" : ""}`} data-header>
      <div className="container">
        <h1 className="h1 logo">
          <a href="#"><span>ANKIT</span> KUMAR</a>
        </h1>

        <div className="navbar-actions">
          <select name="language" id="lang">
            <option value="en">En</option>
            <option value="ar">Ar</option>
          </select>
          <button
            className={`theme-btn${isLight ? " active" : ""}`}
            aria-label="Change Theme"
            title="Change Theme"
            onClick={toggleTheme}
          >
            <span className="icon"></span>
          </button>
        </div>

        <button
          className={`nav-toggle-btn${navOpen ? " active" : ""}`}
          aria-label="Toggle Menu"
          title="Toggle Menu"
          onClick={toggleNav}
        >
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className={`navbar${navOpen ? " active" : ""}`} data-navbar>
          <ul className="navbar-list">
            {["home", "about", "skills", "portfolio", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="navbar-link" onClick={closeNav}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}.
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
