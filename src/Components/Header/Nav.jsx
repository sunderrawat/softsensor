import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import classes from "./Nav.module.css";

function Nav() {
  const [fixNav, setFixNav] = useState(false);
  function fixNavHandler() {
    if (window.scrollY >= 80) {
      setFixNav(true);
      console.log("scrollin..", window.scrollY);
    } else {
      setFixNav(false);
    }
  }
  window.addEventListener("scroll", fixNavHandler);
  return (
    <nav className={`${classes.nav} ${fixNav && classes.nav__fixed}`}>
      <div className={classes.logo}>
        <Link to="/">
          <img className={classes.logo__img} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={classes.nav__links}>
        <ul className={classes.nav__ul}>
          <li className={classes.nav__li}>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.nav__li}>
            <Link to="/products">Products</Link>
          </li>
          <li className={classes.nav__li}>
            <Link to="/about">About</Link>
          </li>
          <li className={classes.nav__li}>
            <Link to="/profile">User</Link>
          </li>
          <li className={classes.nav__li}>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
