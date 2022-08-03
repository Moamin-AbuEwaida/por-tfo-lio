import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div id="brand">Moamin</div>
      <div id="nav-menu">
        <span onClick={() => setShowMenu(!showMenu)} className="mobile-menu">
          Menu
        </span>
        <ul className={`${showMenu ? "active" : "hide"}`}>
          <li>
            <a href="#hero" onClick={() => setShowMenu(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setShowMenu(false)}>
              Work
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setShowMenu(false)}>
              About Me
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setShowMenu(false)}>
              Contact
            </a>
          </li>
          <li>
            <button className="cta-outline">Hire Me</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
