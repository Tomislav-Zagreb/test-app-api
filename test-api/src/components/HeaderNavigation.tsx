import { Link, NavLink } from "react-router-dom"
import logo from "../files/logomovie.jpeg"

import headerStyles from "../css/headerStyles.module.css"

function HeaderNavigation() {
  return (
    <div className={headerStyles.headerMain}>
      <Link to="/">
        <img
          src={logo}
          alt="Logo JustWatch streaming usluge"
          className={headerStyles.headerLogo}
          draggable="false"
        />
      </Link>
      <Link to="/" className={headerStyles.headerLogoName}>
        JustWatch
      </Link>
      <hr className={headerStyles.onlyOnMobile} />
      <NavLink to="/movies/">Početna</NavLink>
      <NavLink to="/movies/objasnjenje">Objašnjenje</NavLink>
      <NavLink to="/movies/popular">Popularno</NavLink>{" "}
      <hr className={headerStyles.onlyOnMobile} />
    </div>
  )
}

export default HeaderNavigation
